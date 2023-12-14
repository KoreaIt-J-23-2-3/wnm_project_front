import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { deleteCartApi, getCartApi } from '../../apis/api/cart';
import RootContainer from '../../components/RootContainer/RootContainer';
import Swal from 'sweetalert2';

function CartProducts(props) {
    const navigate = useNavigate()
    const queryCient = useQueryClient();
    const principal = queryCient.getQueryState("getPrincipal");

    const [ cartProducts, setCartProducts ] = useState([]);
    const [ selectedCartProduct, setSelectedCartProduct ] = useState([]);
    const [ priceInfo, setPriceInfo ] = useState({
        cartPricetotal: 0,
        shippingCost: 0,
        finalPrice: 0,
        selectPrice: 0
    });
    
    const getCartProducts = useQuery(["getCartProducts"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getCartApi(principal.data.data.userId, option);
            return await response;
        } catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setCartProducts(!response?.data ? [] : response.data);
        }
    })

    localStorage.removeItem("orderData")
    localStorage.removeItem("isCart")

    useEffect(() => {
        if(!principal.data) {
            navigate("/auth/signin")
            Swal.fire({
                title: "비정상 접근",
                text: "로그인 후 사용해주세요."
            })
            return;
        }
    }, [])

    useEffect(() => {
        const cartPricetotal = cartProducts?.reduce((total, cartProduct) => total += cartProduct.productDtl.price * parseInt(cartProduct.count), 0)
        const shippingCost = cartPricetotal >= 50000 ? 0 : 5000;
        const selectPrice = selectedCartProduct?.reduce((total, selectProduct) => total += selectProduct.productDtl.price * parseInt(selectProduct.count), 0)
        const finalPrice = (shippingCost + cartPricetotal);

        setPriceInfo({
            "cartPricetotal": cartPricetotal,
            "shippingCost": shippingCost,
            "finalPrice": finalPrice,
            "selectPrice": selectPrice
        });
    }, [cartProducts, selectedCartProduct])


    const handleCheckOnChange = (cartId, checked) => {
        if(checked) {
            setSelectedCartProduct([...selectedCartProduct].concat(cartProducts.filter(product => product.cartId === cartId)));
        }else {
            setSelectedCartProduct([...selectedCartProduct.filter(product => product.cartId !== cartId)]);
        }
    }

    const handleDeleteProductOnClick = async (index) => {
        await Swal.fire({
            title: "삭제 확인",
            text: "선택하신 상품을 삭제하시겠습니까?",

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
                    const response = await deleteCartApi(cartProducts[index].cartId, option);
                    if (response.data === true) {
                        Swal.fire({
                            title: "삭제 성공",
                            text: "상품을 삭제했습니다."
                        }).then((result) => {
                            if(result.isConfirmed) {
                                const deleteProduct = [...cartProducts]
                                deleteProduct.splice(index, 1);
                                setCartProducts(deleteProduct);
                                window.location.reload();
                            }
                        })
                    } else {
                        Swal.fire({
                            title: "삭제 실패",
                            text: "상품 삭제에 실패했습니다.",
                        });
                    }
                } catch (error) {
                    console.error("에러 발생:", error);
                }
            }
        })
    }

    const handleShowpingOnClick = () => {
        navigate("/")
    }

    const handleBuyOnClick = () => {
        if(!principal.data) {
            navigate("/auth/signin")
            Swal.fire({
                title: "비정상 접근",
                text: "로그인 후 사용해주세요."
            })
        } else {
            if(selectedCartProduct.length === 0) {
                Swal.fire({
                    title: "상품 없음",
                    text: "상품을 선택해주세요.",
                });
            } else {
                const overStockProducts = cartProducts.filter(cp => selectedCartProduct.filter(scp => scp.productDtlId === cp.productDtl.productDtlId)[0]?.count > cp.productDtl.tempStock);
                if(overStockProducts.length > 0) {
                    const message = overStockProducts?.map(osp => {
                        return `${osp.productDtl.productMst.productName}<br>[size: ${osp.productDtl.size.sizeName}]\n`
                    }).join("");
                    Swal.fire({
                        title: "재고 부족",
                        html: `상품의 재고가 부족합니다.<br>${message}`
                    });
                    return
                } 
                localStorage.setItem("orderData", JSON.stringify(selectedCartProduct))
                localStorage.setItem("isCart", true);
                navigate("/order")
            }
        }
    }

    if(getCartProducts.isLoading) {
        return <></>;
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>Cart</h2>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>선택</th>
                                <th>이미지</th>
                                <th>상품명</th>
                                <th>사이즈</th>
                                <th>판매가</th>
                                <th>수량</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts?.map((cartProduct, index) => (
                                <tr key={index} css={S.STdBox}>
                                    <td>
                                        <input type="checkBox" onChange={(e) => handleCheckOnChange(cartProduct.cartId, e.target.checked)} />
                                    </td>
                                    <td>
                                        <img css={S.SProductImg} src={cartProducts?.filter(p => p.productDtlId === cartProduct.productDtlId)[0]?.productDtl?.productMst?.productThumbnailUrl} />
                                    </td>
                                    <td>{cartProduct.productDtl.productMst.productName}</td>
                                    <td>{cartProduct.productDtl.size.sizeName}</td>
                                    <td>{cartProduct.productDtl.price * parseInt(cartProduct.count)}</td>
                                    <td>{cartProduct.count}</td>
                                    <td>
                                        <button onClick={() => handleDeleteProductOnClick(index)}>X</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div css={S.SPriceTableBox}>
                    <table css={S.SPriceTable}>
                        <thead>
                            <tr css={S.SPriceThBox}>
                                <th>총 상품 금액</th>
                                <th>총 배송비</th>
                                <th>선택 상품 <br/> 결제 예정 금액</th>
                                <th>전체 상품 <br/> 결제 예정 금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr css={S.SPriceTdBox}>
                                <td>{priceInfo.cartPricetotal?.toLocaleString("ko-KR")}원</td>
                                <td> + {priceInfo.shippingCost?.toLocaleString("ko-KR")}원</td>
                                <td>{priceInfo.selectPrice?.toLocaleString("ko-KR")}원</td>
                                <td>{priceInfo.finalPrice?.toLocaleString("ko-KR")}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div css={S.SButtonBox}>
                    <button  css={S.SShowpingButton} onClick={handleShowpingOnClick}>계속 쇼핑</button>
                    <button css={S.SBuyButton} onClick={handleBuyOnClick}>선택 상품 주문</button>
                </div>
            </div>
            </div>
        </RootContainer>
    );
}

export default CartProducts;