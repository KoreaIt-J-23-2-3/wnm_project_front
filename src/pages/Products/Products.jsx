import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
/** @jsxImportSource @emotion/react */
import * as S from '../Products/Style';
import { getAllProductsApi, getProductsCountApi } from '../../apis/api/product';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useNavigate, useParams } from 'react-router-dom';

function getStartIndex(currentPage) {
    const startIndex = parseInt(currentPage) % 5 === 0 ? parseInt(currentPage) - 4 : parseInt(currentPage) - (parseInt(currentPage) % 5) + 1;
    return startIndex;
}

function getEndIndex(startIndex, lastPage) {
    const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;
    return endIndex;
}

function getLastPage(totalCount, showCount) {
    const lastPage = totalCount % showCount === 0 ? totalCount / showCount : Math.floor(totalCount / showCount) + 1;
    return lastPage;
}

function getTotalPageIndex(startIndex, endIndex) {
    const totalPageIndex = []
    for(let i = startIndex; i <= endIndex; i++) {
        totalPageIndex.push(i)
    }
    return totalPageIndex;
}



function Products({ location }) {
    const navigate = useNavigate();
    const { type, category } = useParams();
    const [ searchValue, setSearchValue ] = useState("");
    const [ products, setProducts ] = useState();
    const [ count, setCount ] = useState(0);
    const [ lastPage, setLastPage ] = useState(0)
    const [ startIndex, setStartIndex ] = useState(0);
    const [ endIndex, setEndIndex ] = useState(0);
    const [ totalPageIndex, setTotalPageIndex ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ searchInput, setSearchInput ] = useState('');
    const [ oldSearchData, setOldSearchData ] = useState({
        petTypeName: type,
        productCategoryName: !!category ? category : 'all',
        searchOption: "all",
        searchValue: "",
        sortOption: "name",
        pageIndex: 1
    });

    const sortOptions = [
        {value: "name", label: "상품명"},
        {value: "lowprice", label: "낮은가격순"},
        {value: "highprice", label: "높은가격순"}
    ]

    const [ searchData, setSearchData ] = useState({
        petTypeName: type,
        productCategoryName: !!category ? category : 'all',
        searchOption: "all",
        searchValue: "",
        sortOption: "name",
        pageIndex: 1
    });

    useEffect(() => {
        setSearchData({
            ...searchData,
            searchValue: searchInput
        })
    }, [searchInput])

    const getProducts = useQuery(["getProducts"], async () => {
        try {
            const response = getAllProductsApi(searchData);
            return await response
        } catch(error) {
            console.log(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setOldSearchData(searchData)
            setProducts(response?.data)
        }
    })

    useEffect(() => {
        getProducts.refetch()
        getProductsPagenation.refetch()
    }, [products])


    const getProductsPagenation = useQuery(["getProductsPageNation"], async () => {
        try {
            const response = getProductsCountApi(searchData);
            return response;
        } catch (error) {
            console.error("Error in getProductsCountApi:", error);
            throw error;
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            const respLastPage = getLastPage(response?.data, 12);
            setLastPage(respLastPage)
            const respStartIndex = getStartIndex(currentPage)
            setStartIndex(respStartIndex)
            const respEndIndex = getEndIndex(respStartIndex, respLastPage);
            setEndIndex(respEndIndex)
            const respTotalPageIndex = getTotalPageIndex(respStartIndex, respEndIndex)
            setTotalPageIndex(respTotalPageIndex)
        }
    })


    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSortOptionChange = (e) => {
        searchData.sortOption = e.target.value
    }


    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearchButtonClick();
        }
    }

    const handleSearchButtonClick = () => {
        searchData.pageIndex = 1;
        setCurrentPage(1)

        setSearchData({
            ...searchData,
            searchValue: searchInput,
            pageIndex: 1
        })
        getProductsPagenation.refetch();
        getProducts.refetch();
    }


    const handleProductOnclick = (e) => {
        navigate(`/product/${e.target.id}`)
    }


    const handlePageClick = async (page) => {
        searchData.pageIndex = page;
        setCurrentPage(page)

        const response = await getAllProductsApi({...oldSearchData, pageIndex: page})
        setProducts(response?.data)

        const resp = await getProductsCountApi({...oldSearchData, pageIndex: page})
        const respLastPage = getLastPage(resp.data, 12);
        setLastPage(respLastPage)
        const respStartIndex = getStartIndex(page)
        setStartIndex(respStartIndex)
        const respEndIndex = getEndIndex(respStartIndex, respLastPage);
        setEndIndex(respEndIndex)
        const respTotalPageIndex = getTotalPageIndex(respStartIndex, respEndIndex)
        setTotalPageIndex(respTotalPageIndex)
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SSubContainer}>
                    <div css={S.SSelectBox}>
                        <select 
                            options={sortOptions}
                            onChange={handleSortOptionChange}>
                                {sortOptions.map(option => {
                                    return <option name='sortOption' key={option.label} value={option.value}>{option.label}</option>
                                })}
                        </select> 
                        <input type="text" name='value' onKeyDown={handleOnKeyPress} onChange={handleSearchInputChange} value={searchInput}/>
                        <button onClick={handleSearchButtonClick}>검색</button>
                    </div>
                </div>
                <div css={S.SProductContainer}>
                    {!getProducts.isLoading && getProducts?.data?.data.map((product) => {
                        return  <div css={S.SProductBox} key={product.productMstId} >
                                    <ul>
                                        <li onClick={handleProductOnclick}>
                                            <img id={product.productMstId} src={product.productThumbnailUrl} alt="" />
                                            <h3>{product.productName}</h3>
                                            <p>
                                                가격 : {product.tempStock <= 0 ? "품절" : product.minPrice?.slice(4, product.minPrice.lastIndexOf())}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                    })}
                </div>
                <div css={S.SPageButtonBox}>
                    <button
                        onClick={() => handlePageClick(searchData.pageIndex - 1)}
                        disabled={currentPage === 1}
                        >
                            {"<"}
                    </button>

                    {totalPageIndex.map((page, index) => (
                        <button 
                            css={currentPage === page ? S.selectedPageButton : S.PageButton}
                            name="totalPageIndex"
                            onClick={() => handlePageClick(page)}
                            key={index}>
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageClick(searchData.pageIndex + 1)}
                        disabled={currentPage === lastPage}
                        >
                            {">"}
                    </button>
                </div>
            </div>
        </RootContainer>
    );
}

export default Products;
