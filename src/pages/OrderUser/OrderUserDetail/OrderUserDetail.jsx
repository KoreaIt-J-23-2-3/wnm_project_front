import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../Mypage/Mypage';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import ReviewModal from '../../../components/Review/ReviewModal/ReviewModal';
import { getReviewByUserApi } from '../../../apis/api/review';
import { getUserOrderApi, getUserOrderDetailApi } from '../../../apis/api/order';

function OrderUserDetail(props) {

    const navigate = useNavigate();
    const params = useParams();
    const orderId = params.orderId
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ selectedProduct, setSelectedProduct ] = useState(null);
    const [ userId, setUserId ] = useState();
    const [getReview, setGetReivew ] = useState([]);
    const modalBackground = useRef();
    
    
    let price = 0;

    const getOrderDtl = useQuery(["getOrderDtl"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getUserOrderDetailApi(orderId, option);
            return await response;
        } catch(error) {
            console.log(error)
        }
    },{
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setUserId(response?.data?.userId)
            response?.data.orderProducts.forEach(elemnt => {
            price += elemnt.productDtl.price * elemnt.count
        })
        setTotalPrice(price)
        }
    })

    const condition = getOrderDtl?.data?.data.orderStatus === 2 || getOrderDtl?.data?.data.orderStatus === 3;


    const handleUsersOrdersOnClick = () => {
        navigate(-1)
    }

    if(getOrderDtl.isLoading) {
        return <></>
    }


    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>주문 상세 정보</h2>
                </div>
                <div css={S.SSubTitleBox}>
                    <h3>주문 정보</h3>
                    <button onClick={handleUsersOrdersOnClick}>주문 정보 리스트</button>
                </div>
                <div css={S.STableBox}>
                <table css={S.STable}>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>
                                주문일자
                            </th>
                            <th>받는 사람</th>
                            <th>휴대전화</th>
                            <th>주소</th>
                            <th>주문 처리</th>
                            <th>총 결제 금액</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={getOrderDtl?.data?.data.orderId} css={S.STdBox}>
                                <td>
                                    {getOrderDtl?.data?.data.orderDate}<br/>
                                </td>
                                <td>{getOrderDtl?.data?.data.shippingName}</td>
                                <td>{getOrderDtl?.data?.data.shippingPhone}</td>
                                <td>
                                    우편번호 : [{getOrderDtl?.data?.data.shippingAddressNumber}]<br/>
                                    {getOrderDtl?.data?.data.shippingAddressName}<br/>
                                    {getOrderDtl?.data?.data.shippingAddressDetailName}
                                </td>
                                <td>
                                    {getOrderDtl?.data?.data.orderStatus === 0 && "배송 준비"}
                                    {getOrderDtl?.data?.data.orderStatus === 1 && "배송 중"}
                                    {getOrderDtl?.data?.data.orderStatus === 2 && "배송 완료"}
                                    {getOrderDtl?.data?.data.orderStatus === 3 && "구매 확정"}
                                </td>
                                <td>{totalPrice.toLocaleString('ko-KR')}원</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div css={S.SSubTitleBox}>
                <h3>회원 주문 상품 상세 정보</h3>
            </div>
            <div css={S.STableBox}>
                <table css={S.STable}>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>상품 이미지</th>
                            <th>상품 명</th>
                            <th>
                                사이즈 명<br/>
                            </th>
                            <th>주문 수량</th>
                            <th>
                                상품 가격<br/>
                                [총 금액]
                            </th>
                            <th>리뷰</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getOrderDtl?.data?.data.orderProducts.map(data => {
                            return <tr key={data.orderProductsId} css={S.STdBox}>
                                <td>
                                    <img css={S.SImg}src={data.productDtl.productMst.productThumbnailUrl} alt="" />
                                </td>
                                <td>{data.productDtl.productMst.productName}</td>
                                <td>
                                    {data.productDtl.size.sizeName}<br/>
                                </td>
                                <td>{data.count}</td>
                                <td>
                                    {data.productDtl.price.toLocaleString("ko-KR")}원<br/>
                                    [{(data.productDtl.price * data.count).toLocaleString("ko-KR")}원]
                                </td>
                                <td>
                                    <div css={S.SBtnWrapper}>
                                    <button
                                        disabled={!!data?.review?.reviewId || !condition}
                                        onClick={() => {
                                            if (condition) {
                                            setModalOpen(true);
                                            setSelectedProduct(data);
                                            }
                                        }}
                                        >
                                        {!!data?.review?.reviewId ? "등록완료" : "리뷰쓰기"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
            {modalOpen &&
                <ReviewModal isOpen={modalOpen} onRequestClose={() => {setModalOpen(false)}} product={selectedProduct} userId={userId}/>
            }
        </Mypage>
    );
}

export default OrderUserDetail;
