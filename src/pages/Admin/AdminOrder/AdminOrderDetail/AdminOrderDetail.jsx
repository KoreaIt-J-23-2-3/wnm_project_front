import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';


import { getUserOrderDetailApi, updateOrderStatusApi } from '../../../../apis/api/order';

import Mypage from '../../../Mypage/Mypage';
import Swal from 'sweetalert2';

function AdminOrderDetail(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const option = {
        headers: {
            Authorization: localStorage.getItem("accessToken"),
            'Content-Type': 'application/json'
        },
    }
    const navigate = useNavigate();
    const param = useParams();
    const orderId = param.orderId;
    const [ totalPrice,setTotalPrice ] = useState(0);
    const [ orderStatus, setOrderStatus ] = useState(0)
    let price = 0;
    const status = [
        { value: 0, label:"배송 준비" },
        { value: 1, label:"배송 중" },
        { value: 2, label:"배송 완료" },
        { value: 3, label:"구매 확정" }
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

    const getProduct = useQuery([], () => {
        return getUserOrderDetailApi(orderId, option);
    }, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            response?.data.orderProducts.forEach(element => {
            price += element.productDtl.price * element.count
        })
        setTotalPrice(price)
        }
    })


    if(getProduct.isLoading) {
        return <></>
    }

    


    const handleOrderStatusChange = (e) => {
        setOrderStatus(parseInt(e.target.value))
    }

    const handleUpdateOrderStatusClick = async () => {
        try {
            if(getProduct?.data?.data.orderStatus === orderStatus) {
                Swal.fire({
                    title: "변경 실패",
                    text: "같은 배송 상태로는 변경할 수 없습니다."
                }).then((result) => {
                    if(result.isConfirmed) {
                    }
                })
                return;
            }

            await updateOrderStatusApi(orderId, parseInt(orderStatus), option)
            Swal.fire({
                title: "변경 성공",
                text: "배송 상태 변경 완료"
            }).then((result) => {
                if(result.isConfirmed) {
                }
            })
            getProduct.refetch()
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const handleUsersOrdersOnClick = () => {
        navigate(-1)
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>회원 주문 상세 정보</h2>
                </div>
                <div css={S.SSubTitleBox}>
                    <h3>회원 주문 정보</h3>
                    <button onClick={handleUsersOrdersOnClick}>회원 주문 정보 리스트</button>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>
                                    주문 일자
                                </th>
                                <th>주문자 번호</th>
                                <th>받는 사람</th>
                                <th>휴대전화</th>
                                <th>주소</th>
                                <th>배송 상태</th>
                                <th>배송 상태 설정</th>
                                <th>총 결제 금액</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr key={getProduct?.data?.data.orderId} css={S.STdBox}>
                                    <td>
                                        {getProduct?.data?.data.orderDate}<br/>
                                    </td>
                                    <td>{getProduct?.data?.data.userId}</td>
                                    <td>{getProduct?.data?.data.shippingName}</td>
                                    <td>{getProduct?.data?.data.shippingPhone}</td>
                                    <td>
                                        우편번호 :[{getProduct?.data?.data.shippingAddressNumber}]<br/>
                                        {getProduct?.data?.data.shippingAddressName}<br/>
                                        {getProduct?.data?.data.shippingAddressDetailName}
                                    </td>
                                    <td>
                                        {getProduct?.data?.data.orderStatus === 0 && "배송 준비"}
                                        {getProduct?.data?.data.orderStatus === 1 && "배송 중"}
                                        {getProduct?.data?.data.orderStatus === 2 && "배송 완료"}
                                        {getProduct?.data?.data.orderStatus === 3 && "구매 확정"}
                                    </td>
                                    <td>
                                        <div css={S.SSettingBox}>
                                            <select option={status} onChange={handleOrderStatusChange}>
                                                {status.map(st => {
                                                    return <option key={st.value} value={st.value} label={st.label}></option>
                                                })}
                                            </select>
                                            <button onClick={handleUpdateOrderStatusClick}>배송상태변경</button>
                                        </div>
                                    </td>
                                    <td>
                                        {totalPrice.toLocaleString("ko-KR")}원
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>

                <div css={S.SSubTitleBox}>
                    <h3>회원 주문 상세 정보</h3>
                </div>

                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>개별 주문 번호</th>
                                <th>상품 번호</th>
                                <th>상품 이미지</th>
                                <th>상품 명</th>
                                <th>
                                    사이즈 명<br/>
                                    [사이즈 번호]
                                </th>
                                <th>주문 수량</th>
                                <th>
                                    상품 가격<br/>
                                    [총 금액]
                                </th>
                                <th>
                                    상품 재고<br/>
                                    (실제 재고)
                                </th>
                                <th>
                                    상품 재고<br/>
                                    (임시 재고)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {getProduct?.data?.data.orderProducts.map(data => {
                                return <tr key={data.orderProductsId} css={S.STdBox}>
                                    <td>{data.orderProductsId}</td>
                                    <td>{data.productDtl.productDtlId}</td>
                                    <td>
                                        <img css={S.SImg}src={data.productDtl.productMst.productThumbnailUrl} alt="" />
                                    </td>
                                    <td>{data.productDtl.productMst.productName}</td>
                                    <td>
                                        {data.productDtl.size.sizeName}<br/>
                                        [{data.productDtl.size.sizeId}]
                                    </td>
                                    <td>{data.count}</td>
                                    <td>
                                        {data.productDtl.price.toLocaleString("ko-KR")}원<br/>
                                        [{(data.productDtl.price * data.count).toLocaleString("ko-KR")}원]
                                    </td>
                                    <td>{data.productDtl.actualStock}</td>
                                    <td>{data.productDtl.tempStock}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Mypage>
    );
}

export default AdminOrderDetail;
