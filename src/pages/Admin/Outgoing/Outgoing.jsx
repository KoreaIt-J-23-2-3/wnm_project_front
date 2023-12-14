import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { addOutgoingApi, getOutgoingApi } from '../../../apis/api/outgoing';
import { useNavigate } from 'react-router';
import Mypage from '../../Mypage/Mypage';
import { useQueryClient } from 'react-query';
import Swal from 'sweetalert2';

function Outgoing(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const navigate = useNavigate();
    const [ productDtlIdInput, setProductDtlIdInput ] = useState();
    const [ getData, setGetData ] = useState([]);

    const [ productDtlId, setProductDtlId ] = useState(""); 
    const [ count, setCount ] = useState(""); 

    const handleInputChange = (e) => {
        setProductDtlIdInput(e.target.value)
    }

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

    const handleGetOutgoingClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await getOutgoingApi(parseInt(productDtlIdInput), option);
            console.log(response)
            setGetData(response?.data)
        } catch (error) {            
            console.log(error)
        }        
    }

    const handleAddIncomingClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await addOutgoingApi(parseInt(productDtlId), parseInt(count), option);
            Swal.fire({
                title: "출고 완료",
                text: "상품이 출고되었습니다."
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleAddInputChange = (e) => {
        if(e.target.name === "count") {
            setCount(e.target.value)
        }else {
            setProductDtlId(e.target.value)
        }
    }

    return (
        <Mypage>
        <div css={S.SContainer}>
            <div css={S.STopTitle}>
                <h2>출고 조회</h2>
            </div>
            <div css={S.SSelectBox}>
                <div css={S.SLeftSelectBox}>
                    <input name='productDtlId' type='text' placeholder='productDtlId' onChange={handleAddInputChange} value={productDtlId}/>  
                    <input name='count' type='text' placeholder='count' onChange={handleAddInputChange} value={count}/>
                    <button onClick={handleAddIncomingClick}>추가 출고</button>
                </div>
                <div css={S.SRightSelectBox}>
                    <p>상품 사이즈별 번호 조회</p>
                    <input value={productDtlIdInput} type='text' onChange={handleInputChange}/>
                    <button onClick={handleGetOutgoingClick}>출고 조회</button>
                </div>
            </div>
            <div css={S.STableBox}>
                <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>출고 번호</th>
                                <th>수량</th>
                                <th>출고 날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getData?.map(inData => {
                                return <tr key={inData.historyId} css={S.STdBox}>
                                    <td>{inData?.historyId}</td>
                                    <td>{inData?.count}</td>
                                    <td>{inData?.createDate}</td>
                                </tr>
                            })}
                        </tbody>
                </table>
            </div>
        </div>
    </Mypage>
    );
}

export default Outgoing;
