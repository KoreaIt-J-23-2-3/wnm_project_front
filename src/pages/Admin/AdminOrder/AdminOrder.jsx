import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { getOrdersCountApi, getOrdersForAdminApi, updateOrderStatusApi } from '../../../apis/api/order';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Mypage from '../../Mypage/Mypage';
import PageNation from '../../../utils/PageNation/PageNation';
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


function AdminOrder(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const option = {
        headers: {
            Authorization: localStorage.getItem("accessToken")
        }
    }
    const navigate = useNavigate()
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ orderData, setOrderData ] = useState();
    const [ orderCount, setOrderCount ] = useState();
    const [ orderStatus, setOrderStatus ] = useState(0)
    const [ oldSearchData, setOldSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
        sortOption: "",
        pageIndex: 1
    });
    const [ searchData, setSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
        sortOption: "",
        pageIndex: 1
    });
    const [ lastPage, setLastPage ] = useState(0)
    const [ startIndex, setStartIndex ] = useState(0);
    const [ endIndex, setEndIndex ] = useState(0);
    const [ totalPageIndex, setTotalPageIndex ] = useState([]);
    const [ searchInput, setSearchInput ] = useState('');
    const searchOption = [
        {value: "받는사람"},
        {value: "전화번호"},
        {value: "주소"},
        {value: "유저번호"},
        {value: "주문번호"},
        {value: "배송상태"}
    ]
    const sortOption = [
        {value: "일자내림차순"},
        {value: "일자올림차순"}
    ]
    const status = [
        { value: 0, label:"배송준비" },
        { value: 1, label:"배송중" },
        { value: 2, label:"배송완료" },
        { value: 3, label:"구매확정" }
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



    const getOrders = useQuery(["getOrders", searchData.pageIndex], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await getOrdersForAdminApi(searchData, option);
        } catch (error) {
            console.log(error.response.data)
            alert(error.response.data)
        }
    },{
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setOrderData(response?.data)
        }
    })

    const getOrdersCount = useQuery(["getOrdersCount"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await getOrdersCountApi(searchData, option);
        } catch (error) {
            alert(error.response.data)
        }
    },{
        retry: 0,
        refetchOnWindowFocus: false,
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

    const handleSearchDataChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }

    const handleNavigateProductDetailClick = (orderId) => {
        navigate(`/admin/order/${orderId}`)
    }

    const handleOrderStatusChange = (e) => {
        setOrderStatus(parseInt(e.target.value))
    }

    const handleUpdateOrderStatusClick = async (data) => {
        try {
            if(data.orderStatus === orderStatus) {
                Swal.fire({
                    title: "변경 실패",
                    text: "같은 배송 상태로는 변경할 수 없습니다."
                }).then((result) => {
                    if(result.isConfirmed) {
                    }
                })
                return;
            }
            await updateOrderStatusApi(parseInt(data.orderId), parseInt(orderStatus), option)
            Swal.fire({
                title: "변경 성공",
                text: "배송 상태 변경 완료"
            }).then((result) => {
                if(result.isConfirmed) {
                }
            })
            getOrders.refetch()
        } catch (error) {
            alert(error.response.data)
        }
    }

    const handleSearchOrderClick = () => {

        searchData.pageIndex = 1;
        setCurrentPage(1)
        getOrdersCount.refetch();

        if(orderData === undefined) {
            Swal.fire({
                title: "검색 실패",
                text: "검색된 상품이 존재하지 않습니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    navigate('/admin/order')
                }
            })
        }

        getOrders.refetch()
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearchOrderClick();
        }
    }

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value)
    }


    const handlePageClick = async (page) => {
        searchData.pageIndex = page;
        const response = await getOrdersForAdminApi({...oldSearchData, pageIndex: page}, option)
        setOrderData(response?.data)
        setCurrentPage(page)
        const resp = await getOrdersCountApi({...oldSearchData, pageIndex: page}, option);

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
                    <h2>회원 주문 정보 리스트</h2>
                </div>
                <div css={S.SSelectBox}>
                    <select option={searchOption} name='searchOption' onChange={handleSearchDataChange}>
                        {searchOption.map(option => {
                            return <option key={option.value} value={option.value} label={option.value}></option>
                        })}
                    </select>
                    <select option={sortOption} name='sortOption' onChange={handleSearchDataChange}>
                        {sortOption.map(sort => {
                            return <option key={sort.value} value={sort.value} label={sort.value}></option>
                        })}
                    </select>
                    <input type="text" name={searchInput} onKeyDown={handleOnKeyPress} onChange={handleSearchInputChange}/>
                    <button onClick={handleSearchOrderClick}>검색</button>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>
                                    주문 일자<br/>
                                    [주문번호]
                                </th>
                                <th>주문자 번호</th>
                                <th>받는 사람</th>
                                <th>휴대전화</th>
                                <th>주소</th>
                                <th>배송 상태</th>
                                <th>배송 상태 설정</th>
                                <th>배송 상세 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData?.map(data => {
                                return <tr key={data.orderId} css={S.STdBox}>
                                    <td>
                                        {data.orderDate}<br/>
                                        [{data.orderId}]
                                    </td>
                                    <td>{data.userId}</td>
                                    <td>{data.shippingName}</td>
                                    <td>{data.shippingPhone}</td>
                                    <td>
                                        우편번호 :[{data.shippingAddressNumber}]<br/>
                                        {data.shippingAddressName}<br/>
                                        {data.shippingAddressDetailName}
                                    </td>
                                    <td>
                                        {data.orderStatus === 0 && "배송준비"}
                                        {data.orderStatus === 1 && "배송중"}
                                        {data.orderStatus === 2 && "배송완료"}
                                        {data.orderStatus === 3 && "구매확정"}
                                    </td>
                                    <td>
                                        <div css={S.SSettingBox}>
                                            <select option={status} onChange={handleOrderStatusChange}>
                                                {status.map(st => {
                                                    return <option key={st.value} value={st.value} label={st.label}></option>
                                                })}
                                            </select>
                                            <button onClick={()=>handleUpdateOrderStatusClick(data)}>배송상태변경</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => handleNavigateProductDetailClick(data.orderId)}>배송상세</button>  
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

export default AdminOrder;
