import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import { getProductApi } from '../../apis/api/product';
import { useNavigate } from 'react-router-dom';
import { addOrderApi } from '../../apis/api/order';
import RootContainer from '../../components/RootContainer/RootContainer';
import Swal from 'sweetalert2';

function BuyInfo(props) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ buyProductList, setBuyProductList ] = useState(JSON.parse(localStorage.getItem("orderData")));

    const [ shippingUserInfo, setShippingUserInfo ] = useState({
        name: principal?.data?.data?.name,
        phone: principal?.data?.data?.phoneNumber,
        addressNumber: principal?.data?.data?.defaultAddressNumber,
        addressName: principal?.data?.data?.defaultAddressName,
        addressDetailName: principal?.data?.data?.defaultAddressDetailName
    });

    const [ priceInfo, setPriceInfo ] = useState({
        buyPricetotal: 0,
        shippingCost: 0,
        finalPrice: 0
    });

    const addressDetailNameRef = useRef();

    useEffect(() => {
        const iamprot = document.createElement("script");
        iamprot.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamprot);
        return () => {
            document.head.removeChild(iamprot);
        }
    }, [])

    useEffect(() => {
        if(!principal.data) {
            navigate("/auth/signin")
            Swal.fire({
                title: "비정상 접근",
                text: "로그인 후 사용해주세요."
            })
            return
        }
    }, [])

    useEffect(() => {
        const buyPricetotal = buyProductList?.reduce((total, buyProducts) => total += (buyProducts.productDtl.price * parseInt(buyProducts.count)), 0)
        const shippingCost = buyPricetotal >= 50000 ? 0 : 5000;
        const finalPrice = (shippingCost + buyPricetotal);

        setPriceInfo({
            "buyPricetotal": buyPricetotal,
            "shippingCost": shippingCost,
            "finalPrice": finalPrice
        });
    }, [])
    

    const orderUserOnChange = (e) => {
        setShippingUserInfo({
            ...shippingUserInfo,
            [e.target.name]: e.target.value
        });
    }
    
    const handleFindAddressClick = () => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);
        
        script.onload = () => {
            new window.daum.Postcode({
                oncomplete: function(data) {
                    var addr = '';
                    var extraAddr = '';
                    
                    if (data.userSelectedType === 'R') {
                        addr = data.roadAddress;
                    } else {
                        addr = data.jibunAddress;
                    }
                    if(data.userSelectedType === 'R'){
                        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                            extraAddr += data.bname;
                        }
                        if(data.buildingName !== '' && data.apartment === 'Y'){
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        if(extraAddr !== ''){
                            extraAddr = ' (' + extraAddr + ')';
                        }
                    }

                    setShippingUserInfo({
                        ...shippingUserInfo,
                        addressNumber: data.zonecode,
                        addressName: addr,
                        addressDetailName: ""
                    })

                    addressDetailNameRef.current.focus();
                }
            }).open();
        };
        
        return () => {
            document.body.removeChild(script);
        };
    } // daum 주소코드 끝
    
    const handlePaymentSubmit = (provider) => {
        if(!window.IMP) {return} 
        const { IMP } = window;
        IMP.init("imp31774216");

        const paymentData = {
            pg: "",
            pay_method: "",
            merchant_uid: `mid_${new Date().getTime()}`, // 구매자 식별코드(결제날,시간)
            amount: priceInfo.finalPrice, // 금액
            name:  'Woof&Meow',// 상품이름
            buyer_name: principal?.data?.data?.name, // 구매자 이름
            buyer_email: principal?.data?.data?.email
        }

        switch(provider) {
            case "kakao": 
                paymentData.pg = "kakaopay";
                paymentData.pay_method = "kakaopay";
                break;
            case "toss": 
                paymentData.pg = "tosspay";
                paymentData.pay_method = "tosspay";
                break;
        }

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;

            if(success) {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }

                const order = {
                    userId: principal.data.data.userId,
                    shippingName: shippingUserInfo.name,
                    shippingPhone: shippingUserInfo.phone,
                    shippingAddressNumber: shippingUserInfo.addressNumber,
                    shippingAddressName: shippingUserInfo.addressName,
                    shippingAddressDetailName: shippingUserInfo.addressDetailName,
                    orderProductData: [...buyProductList],
                    isCart: localStorage.getItem("isCart")
                }

                addOrderApi(order, option)
                .then(response => {
                    Swal.fire({
                        title: "결제 성공",
                        text: "결제가 완료되었습니다."
                    }).then((result) => {
                        if(result.isConfirmed) {
                            localStorage.removeItem("orderData")
                            navigate("/")
                        }
                    })
                })
            } else {
                alert(error_msg)
            }
        });
    }

    const handleCencelOnClick = () => {
        Swal.fire({
            title: "주문 취소",
            text: "주문을 취소하시겠습니까?",

            showCancelButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#3085d6",
            cancelButtonText: "취소",
            cancelButtonColor: "#d33"
        }).then((result) => {
            if(result.isConfirmed) {
                navigate("/")
            }
            return
        })
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SOrderHeader}>
                    <h2>주문 / 결제</h2>
                </div>

                <div css={S.SUserInfoBox}>
                        <h2>주문 정보</h2>
                    <div css={S.InfoInputBox}>
                        <h3 css={S.STitle}>주문자</h3>
                        <h3 css={S.SData}>{principal?.data?.data?.name}</h3>
                    </div>
                    <div css={S.InfoInputBox}>
                        <h3 css={S.STitle}>이메일</h3>
                        <h3 css={S.SData}>{principal?.data?.data?.email}</h3>
                    </div>
                    <div css={S.InfoInputBox}>
                        <h3 css={S.STitle}>휴대전화</h3>
                        <h3 css={S.SData}>{principal?.data?.data?.phoneNumber}</h3>
                    </div>
                </div>

                <div css={S.SShippingInfoBox}>
                    <h2>배송지</h2>
                    <div css={S.SShippingInfoInputBox}>
                        <h3 css={S.STitle}>받는사람</h3>
                        <input type="text" 
                            name="name" 
                            value={shippingUserInfo.name} 
                            onChange={orderUserOnChange}/>
                    </div>
                    <div css={S.SShippingInfoInputBox}>
                        <h3 css={S.STitle}>주소</h3>
                        <div css={S.SAddressBox}>
                            <div css={S.SAddressNumberBox}>
                                <input type="text" 
                                    placeholder='우편번호'
                                    name="addressNumber" 
                                    value={shippingUserInfo.addressNumber}
                                    onChange={orderUserOnChange}
                                    disabled={true}/>
                                <div css={S.SAddressButtonBox}>
                                    <button name='findDefaultAddressNumber' 
                                        onClick={handleFindAddressClick} >주소검색</button>
                                </div>
                            </div>
                            <input type="text" 
                                placeholder='주소' 
                                name="addressName" 
                                value={shippingUserInfo.addressName}
                                onChange={orderUserOnChange}
                                disabled={true}/>
                            <input type="text" 
                                placeholder='상세주소' 
                                name="addressDetailName" 
                                value={shippingUserInfo.addressDetailName}
                                onChange={orderUserOnChange}
                                ref={addressDetailNameRef}/>
                        </div>
                    </div>
                    <div css={S.SShippingInfoInputBox}>
                        <h3 css={S.STitle}>휴대전화</h3>
                        <input type="text"  
                            name="phone" 
                            value={shippingUserInfo.phone}
                            onChange={orderUserOnChange}/>
                    </div>
                </div>

                <div css={S.SProductsInfoBox}>
                        <h2>주문 상품</h2>
                        {buyProductList?.map((product, index) => 
                            <li key={index}>
                                <div css={S.SProduct}>
                                    <img css={S.SProductImg} src={product.productDtl.productMst.productThumbnailUrl}/>
                                    <div>
                                        <p css={S.SProductName}>{product.productDtl.productMst.productName}</p>
                                        <p css={S.SProductSize}>[사이즈: {product.productDtl.size.sizeName}]</p>
                                        <p css={S.SProductCount}>수량: {product.count}</p>
                                        <p css={S.SProductPrice}>{(product.productDtl.price * parseInt(product.count)).toLocaleString("ko-KR")}원</p>
                                    </div>
                                </div>
                            </li>
                        )}
                </div>

                <div css={S.SPriceInfoBox}>
                        <h2>결제 정보</h2>
                        <div css={S.SPriceBox}>
                            <h3 css={S.SPriceTitle}>주문상품</h3>
                            <h3 css={S.SPrice}>{priceInfo.buyPricetotal?.toLocaleString("ko-KR")}원</h3>
                        </div>
                        <div css={S.SPriceBox}>
                            <h3 css={S.SPriceTitle}>배송비</h3>
                            <h3 css={S.SPrice}>+ {priceInfo.shippingCost?.toLocaleString("ko-KR")}원</h3>
                        </div>
                        <div css={S.SPriceBox}>
                            <h3 css={S.SPriceTitle}>최종금액</h3>
                            <h3 css={S.SPrice}>{priceInfo.finalPrice?.toLocaleString("ko-KR")}원</h3>
                        </div>
                </div>

                <div css={S.SPayMentBox}>
                        <h2>결제 수단</h2>
                        <div css={S.SPayBox}>
                            <h3>결제 수단 선택</h3>
                            <button css={S.SKakaoPay} onClick={() => handlePaymentSubmit("kakao")}>카카오 결제하기</button>
                            <button css={S.STossPay}onClick={() => handlePaymentSubmit("toss")}>토스 결제하기</button>
                        </div>
                </div>

                <div css={S.SCancelBox}>
                        <div css={S.SCancel}>
                            <button onClick={handleCencelOnClick}>주문 취소</button>
                        </div>
                </div>
                
            </div>
        </RootContainer>
    );
}

export default BuyInfo;