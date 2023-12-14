import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../Mypage/Mypage';
import { useQuery, useQueryClient } from 'react-query';
import { deleteAdminToUserApi, getUserCountApi, getUsersApi } from '../../../apis/api/user';
import { useNavigate } from 'react-router-dom';
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

function UserData(props) {
    const navigate = useNavigate();
    const [ currentPage, setCurrentPage ] = useState(1);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ userData, setUserData ] = useState([])
    const [ oldSearchData, setOldSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
    })
    const [ searchData, setSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
    })
    const [ searchInput, setSearchInput ] = useState('');
    const [ userCount, setUserCount ] = useState();

    const searchOption = [
        {value: "all", label: "전체"},
        {value: "name", label: "이름"},
        {value: "number", label: "전화번호"}
    ]
    const [ lastPage, setLastPage ] = useState(0)
    const [ startIndex, setStartIndex ] = useState(0);
    const [ endIndex, setEndIndex ] = useState(0);
    const [ totalPageIndex, setTotalPageIndex ] = useState([]);

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


    const getUserData = useQuery(["getUserData"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getUsersApi(searchData, option);
            return response;
        } catch(error) {
            alert(error.response.data)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setUserData(response)
        }
    });


    const getUserCount = useQuery(["getUserCount"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await getUserCountApi(searchData, option)
            return response;
        } catch (error) {
            
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

    useEffect(() => {
        setSearchData({
            ...searchData,
            searchValue: searchInput
        })
    }, [searchInput])

    
    const handleSearchDataOnChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSearchInputOnChange = (e) => {
        setSearchInput(e.target.value)
    }
    
    const handleSearchOnClick = () => {
        searchData.pageIndex = 1;
        setCurrentPage(1)
        getUserCount.refetch();
        getUserData.refetch();
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearchOnClick();
        }
    }

    const handleUserDeleteOnClick = async (userId) => {
        await Swal.fire({
            title: "삭제 확인",
            text: "선택하신 회원님을 탈퇴시키겠습니까?",

            showCancelButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#3085d6",
            cancelButtonText: "취소",
            cancelButtonColor: "#d33"
        }).then(async (result) => {
            if(result.isConfirmed) {
                try {
                    const option = {
                        headers: {
                            Authorization: localStorage.getItem("accessToken")
                        }
                    }
                    await deleteAdminToUserApi(userId, option)
                    Swal.fire({
                        title: "삭제 성공",
                        text: "탈퇴 되었습니다."
                    }).then((result) => {
                        if(result.isConfirmed) {
                            getUserData.refetch();
                        }
                    })
                } catch (error) {
                    alert(error.message)
                } 
            } else if(result.isDismissed) {
                
            }
        })
    }
    
    if(getUserData.isLoading || getUserCount.isLoading) {
        return <></>
    }
    

    const handlePageClick = async (page) => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        const response = await getUsersApi({...oldSearchData, pageIndex: page}, option)
        getUsersApi(response?.data)
        setCurrentPage(page)
        searchData.pageIndex = page;
        
        const resp = await getUserCountApi(option)

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
                    <h2>회원 정보 리스트</h2>
                </div>
                <div css={S.SSelectBox}>
                    <select option={searchOption} name='searchOption' onChange={handleSearchDataOnChange}>
                        {searchOption.map(op => {
                            return <option key={op.value} value={op.value} label={op.label}/>
                        })}

                    </select>
                    <input type="text" name={searchOption} onKeyDown={handleOnKeyPress} onChange={handleSearchInputOnChange}/>
                    <button onClick={handleSearchOnClick}>검색</button>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>회원 번호</th>
                                <th>이름</th>
                                <th>이메일</th>
                                <th>휴대전화</th>
                                <th>주소</th>
                                <th>
                                    간편로그인<br/>
                                    [제공사이트]
                                </th>
                                <th>탈퇴</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData?.data?.map(data => {
                                return <tr key={data.userId}css={S.STdBox}>
                                    <td>{data.userId}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phoneNumber}</td>
                                    <td>
                                        우편번호: [{data.defaultAddressNumber}]<br/>
                                        {data.defaultAddressName}<br/>
                                        {data.defaultAddressDetailName}
                                    </td>
                                    <td>{data.provider}</td>
                                    <td>
                                        <button onClick={() => handleUserDeleteOnClick(data.userId)}>회원삭제</button>
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

export default UserData;
