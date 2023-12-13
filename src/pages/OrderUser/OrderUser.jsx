import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import Mypage from '../Mypage/Mypage';
import { getUserOrderApi, updateConfirmationApi } from '../../apis/api/order';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function OrderUser(props) {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ searchData, setSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
        sortOption: ""
    })

    const [ userOrder, setUserOrder ] = useState([])

    const getOrderUserProduct = useQuery(["getOrderUserProducts"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getUserOrderApi(searchData, option);
            return await response;
        } catch(error){
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setUserOrder(response?.data)
        }
    })

    const handleNavigateProductDetailClick = (orderId) => {
        navigate(`/orders/${orderId}`)
    }

    const handleconfirmationOnClick = async (data) => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await updateConfirmationApi(parseInt(data.orderId), option);
            Swal.fire({
                title: "구매 확정",
                text: "해당 주문 상품이 구매 확정 되었습니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    getOrderUserProduct.refetch()
                }
            })
        } catch(error) {
            console.log(error)
        }
    }
    
    if(getOrderUserProduct.isLoading) {
        return <></>;
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>주문내역 조회</h2>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>
                                    주문일자<br/>
                                    [주문번호]
                                </th>
                                <th>이미지</th>
                                <th>상품명</th>
                                <th>주문 총액</th>
                                <th>주문 처리</th>
                                <th>주문 상세</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userOrder?.map(data => {
                                let totalPrice = 0;
                                data.getUserOrderProductsRespDtos.map(product => {
                                    totalPrice += product.count * product.productDtl.price
                                })
                                return <tr key={data.orderId} css={S.STdBox}>
                                    <td>
                                        {data.orderDate}<br/>
                                        [{data.orderId}]
                                    </td>
                                    <td>
                                        <img css={S.SProductImg} src={data.getUserOrderProductsRespDtos[0].productDtl.productMst.productThumbnailUrl}/>
                                    </td>

                                    <td>
                                        {data.getUserOrderProductsRespDtos[0].productDtl.productMst.productName}<br/>
                                        {data.getUserOrderProductsRespDtos.length > 1 && ` 외 ${data.getUserOrderProductsRespDtos.length - 1}개의 상품`}
                                    </td>
                                    <td>
                                        {totalPrice?.toLocaleString("ko-KR")}원
                                    </td>
                                    <td>
                                        {data.orderStatus === 0 && "배송 준비"}
                                        {data.orderStatus === 1 && "배송 중"}
                                        <div css={S.SReviewBox}>
                                            {data.orderStatus === 2 && "배송 완료"}
                                            {data.orderStatus === 2 && <button onClick={() => handleconfirmationOnClick(data)}>배송 확정</button>}
                                        </div>
                                        {data.orderStatus === 3 && "구매 확정"} 
                                    </td>
                                    <td>
                                        <button onClick={() => handleNavigateProductDetailClick(data.orderId)}>주문 상세 & 리뷰쓰기</button> 
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Mypage>
    );
}

export default OrderUser;