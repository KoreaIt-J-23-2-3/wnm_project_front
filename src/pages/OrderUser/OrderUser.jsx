import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useQuery, useQueryClient } from 'react-query';
import Mypage from '../Mypage/Mypage';
import { getUserOrderApi } from '../../apis/api/order';
import { useParams } from 'react-router-dom';

function OrderUser(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const userId = useParams();


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

    if(getOrderUserProduct.isLoading) {
        return <></>;
    }


    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>주문내역 조회</h2>
                <table>
                    <thead>
                        <tr css={S.SCartThBox}>
                            <th>
                                주문일자<br/>
                                [주문번호]
                            </th>
                            <th>이미지</th>
                            <th>상품명</th>
                            <th>주문 총액</th>
                            <th>주문처리</th>
                            <th>주문상세</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrder?.map((data, index) => {

                            let totalPrice = 0;
                            data.getUserOrderProductsRespDtos.map(product => {
                                totalPrice += product.count * product.productDtl.price
                            })

                            return <tr key={data.orderId} css={S.SCartTdBox}>
                                <td>
                                    {data.orderDate}<br/>
                                    [{data.orderId}]
                                </td>

                                <td>
                                    <img css={S.SProductImg} src={data.getUserOrderProductsRespDtos[0].productDtl.productMst.productThumbnailUrl}/>
                                </td>

                                <td>
                                    {data.getUserOrderProductsRespDtos[0].productDtl.productMst.productName}
                                    {data.getUserOrderProductsRespDtos.length > 1 && ` 외 ${data.getUserOrderProductsRespDtos.length - 1}개의 상품`}
                                </td>


                                <td>
                                    {totalPrice}
                                </td>
                                
                                <td>
                                    {data.orderStatus === 0 && "배송준비"}
                                    {data.orderStatus === 1 && "배송중"}
                                    {data.orderStatus === 2 && "배송완료"}
                                </td>

                                <td>
                                    <button>주문상세</button>
                                </td>

                                <td>
                                    <button>리뷰쓰기</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </Mypage>
    );
}

export default OrderUser;