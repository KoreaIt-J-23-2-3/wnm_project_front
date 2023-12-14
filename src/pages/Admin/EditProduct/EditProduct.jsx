import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { getProductsApi, getProductsCountApi, removeProductApi } from '../../../apis/api/product';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Mypage from '../../Mypage/Mypage';
import Swal from 'sweetalert2';

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

function EditProduct(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const [ currentPage, setCurrentPage ] = useState(1);
    const navigate = useNavigate();
    const [ productList, setProductList ] = useState([]);
    const [ productCount, setProductCount ] = useState();
    const [ searchInput, setSearchInput ] = useState('');
    const [ oldSearchData, setOldSearchData] = useState({
        petTypeName: "all",
        productCategoryName: "all",
        searchOption: 'name',
        searchValue: '',
        sortOption: 'number',
        pageIndex: 1});
    const [ searchData, setSearchData ] = useState({
        petTypeName: "all",
        productCategoryName: "all",
        searchOption: 'name',
        searchValue: '',
        sortOption: 'number',
        pageIndex: 1});
    const [ lastPage, setLastPage ] = useState(0)
    const [ startIndex, setStartIndex ] = useState(0);
    const [ endIndex, setEndIndex ] = useState(0);
    const [ totalPageIndex, setTotalPageIndex ] = useState([]);

    const petType = [
        { value: "all", label: "전부"},
        { value: "dog", label: "강아지"},
        { value: "cat", label: "고양이"}
    ]
    const category = [
        { value: "all", label: "전부" },
        { value: "home-living", label: "홈·리빙" },
        { value: "walk", label: "산책" },
        { value: "movement", label: "이동" },
        { value: "fashion", label: "패션" },
        { value: "toy", label: "장난감" }
    ]

    const searchOption = [
        { value: "name", label: "제목"},
        { value: "number", label: "마스터아이디"}
    ]

    const sortOption = [
        { value: "name", label: "상품명"},
        { value: "number", label: "상품번호"},
    ]

    useEffect(() => {
        if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
            navigate("/")
            Swal.fire({
                title: "비정상 접근",
                text: "정상적인 접근이 아닙니다."
            })
            return;
        }
    }, [])

    useEffect(() => {
        setSearchData({
            ...searchData,
            searchValue: searchInput
        })
    }, [searchInput])

    const getProducts = useQuery(["getProducts"], async () => {
        const response = await getProductsApi(searchData);
        return response;
    },
    {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            setOldSearchData(searchData)
            setProductList(response?.data)
        }
    });

    const getProductCount = useQuery(["getProductCount"], async () => {
        try {
            const response = getProductsCountApi(searchData);
            return response;
        } catch (error) {
            alert(error.message)
        }
    },{
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            const respLastPage = getLastPage(response?.data, 10);
            setLastPage(respLastPage)
            const respStartIndex = getStartIndex(currentPage)
            setStartIndex(respStartIndex)
            const respEndIndex = getEndIndex(respStartIndex, respLastPage);
            setEndIndex(respEndIndex)
            const respTotalPageIndex = getTotalPageIndex(respStartIndex, respEndIndex)
            setTotalPageIndex(respTotalPageIndex)
        }
    }) 

    if(getProductCount.isLoading || getProducts.isLoading) {
        return <></>
    }

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearchClick = () => {
        searchData.pageIndex = 1;
        setCurrentPage(1)
        getProductCount.refetch();
        getProducts.refetch();
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearchClick();
        }
    }

    const handleSearchSelectChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }

    const handleNavigateJoinProductDetailPageClick = (productMstId) => {
        navigate(`/admin/product/join/${productMstId}`)
    }

    const handleEditProductClick = (productMstId) => {
        navigate(`/admin/edit/product/${productMstId}`)
    }

    const handleRemoveProductClick = async (productMstId) => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            Swal.fire({
                title: "삭제 확인",
                text: "선택하신 상품을 삭제하시겠습니까?",
    
                showCancelButton: true,
                confirmButtonText: "확인",
                confirmButtonColor: "#3085d6",
                cancelButtonText: "취소",
                cancelButtonColor: "#d33"
            }).then(async (result) => {
                if(result.isConfirmed) {
                    await removeProductApi(productMstId, option)
                    Swal.fire({ 
                        title: "삭제 성공",
                        text: "상품을 삭제했습니다."
                    }).then((ok) => {
                        if(ok.isConfirmed) {
                            getProducts.refetch();
                        }
                    })
                }else {
                    Swal.fire({ 
                        title: "삭제 취소",
                        text: "취소되었습니다."
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }



    const handlePageClick = async (page) => {
        searchData.pageIndex = page;

        const response = await getProductsApi({...oldSearchData, pageIndex: page})
        setProductList(response?.data)
        setCurrentPage(page)

        const resp = await getProductsCountApi({...oldSearchData, pageIndex: page})

        const respLastPage = getLastPage(resp.data, 10);
        setLastPage(respLastPage)
        const respStartIndex = getStartIndex(page)
        setStartIndex(respStartIndex)
        const respEndIndex = getEndIndex(respStartIndex, respLastPage);
        setEndIndex(respEndIndex)
        const respTotalPageIndex = getTotalPageIndex(respStartIndex, respEndIndex)
        setTotalPageIndex(respTotalPageIndex)
    }


    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>상품 관리</h2>
                </div>
                <div css={S.SSelectBox}>
                    <button onClick={() => { navigate("/admin/incoming")}}>입고 관리</button>
                    <button onClick={() => { navigate("/admin/outgoing")}}>출고 관리</button>
                    <select option={petType} onChange={handleSearchSelectChange} name='petTypeName'>
                        {petType?.map(pt => {
                            return <option key={pt.value} label={pt.label} value={pt.value} />
                        })}
                    </select>
                    <select option={category} onChange={handleSearchSelectChange} name='productCategoryName'>
                        {category?.map(ct => {
                            return <option key={ct.value} label={ct.label} value={ct.value}/>
                        })}
                    </select>
                    <select option={sortOption} onChange={handleSearchSelectChange} name='sortOption'>
                        {sortOption?.map(so => {
                            return <option key={so.value}  label={so.label} value={so.value}/>
                        })}
                    </select>
                    <select option={searchOption} onChange={handleSearchSelectChange} name='searchOption'>
                        {searchOption?.map(op => {
                            return <option key={op.value} label={op.label} value={op.value}/>
                        })}
                    </select>

                    <input type='text' value={searchInput} onKeyDown={handleOnKeyPress} onChange={handleSearchInputChange}/>
                    <button onClick={handleSearchClick}>검색</button>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>상품 번호</th>
                                <th>상품 이미지</th>
                                <th>상품 명</th>
                                <th>동물 종류</th>
                                <th>카테고리</th>
                                <th>상품 조회</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList?.map(product => {
                                return <tr key={product.productMstId} css={S.STdBox}>
                                    <td>{product.productMstId}</td>
                                    <td>
                                        <img css={S.SImg} src={product.productThumbnailUrl} alt="" />
                                    </td>
                                    <td>{product.productName}</td>
                                    <td>{product.petTypeName}</td>
                                    <td>{product.productCategoryName}</td>
                                    <td>
                                        <button css={S.SSelectButton} onClick={()=>handleNavigateJoinProductDetailPageClick(product.productMstId)}>상세 조회</button>
                                    </td>
                                    <td>
                                        <button css={S.SEditButton} onClick={()=>handleEditProductClick(product.productMstId)}>수정</button>
                                    </td>
                                    <td >
                                        <button css={S.SDeleteButton} onClick={()=>handleRemoveProductClick(product.productMstId)}>삭제</button>  
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
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
        </Mypage>
    );
}

export default EditProduct;
