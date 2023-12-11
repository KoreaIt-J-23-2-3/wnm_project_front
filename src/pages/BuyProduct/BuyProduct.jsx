import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { css } from '@emotion/react';
import { useQuery, useQueryClient } from 'react-query';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductMstApi } from '../../apis/api/product';
import { addToCartApi } from '../../apis/api/cart';
import { getReviewByProductApi } from '../../apis/api/review';
import RootContainer from '../../components/RootContainer/RootContainer';

function BuyProduct(props) {
    const navigate = useNavigate();

    const { productId } = useParams();
    const [ product, setProduct ] = useState({});
    const [ productReview, setProductReview ] = useState([]);
    const [ selectedProducts, setSelectedProducts ] = useState([]);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const getProduct = useQuery(["getProduct"], async () => {
        try {
            const response = getProductMstApi(productId);
            return await response
            
        } catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setProduct(response.data)
        }
    })

        const getReviewByProduct = useQuery(["getReviewByProduct"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await getReviewByProductApi(productId, option);
            return response;
        } catch (error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setProductReview(response?.data)
        }
    })

    localStorage.removeItem("orderData")
    localStorage.removeItem("isCart")

    if(getProduct.isLoading) {
        return<></>
    }
    
    const selectOnChange = (option) => {
        const productDtl = product.productDtlList.filter(pdt => pdt.productDtlId === option.value)[0];

        if(productDtl.tempStock <= 0) {
            alert("해당 상품은 품절입니다.");
            return;
        }

        if(selectedProducts.filter(selectedProduct => selectedProduct.productDtlId === productDtl.productDtlId).length > 0){
            alert("해당 상품은 이미 선택된 상품 입니다.");
            return;
        }

        const newSelectedProduct = {
            productDtlId: productDtl.productDtlId,
            sizeName: productDtl.size.sizeName,
            price: productDtl.price,
            count: 1,
            productDtl: {
                price: productDtl.price,
                size: {
                    sizeId: productDtl.size.sizeId,
                    sizeName: productDtl.size.sizeName
                },
                productMst: {
                    productName: product.productName,
                    productThumbnailUrl: product.productThumbnailUrl
                }
            },
        }
        setSelectedProducts([...selectedProducts, newSelectedProduct]);
    }

    const countOnChange = (target, index) => {
        const pdt = product.productDtlList.filter(pdt => pdt.productDtlId === selectedProducts[index].productDtlId)[0]; 
        const updateSelectedPorudcts = [...selectedProducts];
        updateSelectedPorudcts[index].count = parseInt(target.value);
        updateSelectedPorudcts[index].price = pdt.price * parseInt(target.value);

        if(updateSelectedPorudcts[index].count > pdt.tempStock) {
            alert("현재 재고 보다 많이 선택되었습니다.")
            target.value = pdt.tempStock;
            return
        }

        setSelectedProducts([...updateSelectedPorudcts]);
    }

    const handleDeleteProductOnClick = (index) => {
        const DeleteProduct = [...selectedProducts]
        DeleteProduct.splice(index, 1);
        setSelectedProducts(DeleteProduct);
    }

    const buyNowOnClick = () => {
        if(!principal.data) {
            alert("로그인 후 사용해주세요.")
            navigate("/auth/signin")
        } else {
            if(selectedProducts.length === 0) {
                alert("상품을 선택해주세요.")
            } else {
                localStorage.setItem("orderData", JSON.stringify(selectedProducts));
                localStorage.setItem("isCart", false);
                navigate("/order")
            }
        }
    }

    const handleAddToCartOnClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(!principal.data) {
                alert("로그인 후 사용해주세요.")
                navigate("/auth/signin")
            } else {
                if(selectedProducts.length === 0) {
                    alert("상품을 선택해주세요.")
                } else {
                    if(window.confirm("해당 상품을 장바구니에 담겠습니까?")) {
                        addToCartApi(principal.data.data.userId, [...selectedProducts], option);
                        alert("장바구니에 상품이 정상적으로 담겼습니다.")
                        navigate(`/product/cart/${principal?.data?.data?.userId}`)
                    } else {
                        alert("취소되었습니다.")
                    }
                }
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <RootContainer>
            <div>
                <div css={S.SLayout}>
                    <div css={S.STopContainer} >
                        <div>
                            <img css={S.SThumbnailImg} src={product.productThumbnailUrl} />
                        </div>
                        <div css={S.SOrderInfoBox}>
                            <h2>{product.productName}</h2>
                            <p dangerouslySetInnerHTML={{__html: product.productDetailText}}></p>
                            <div css={S.SSelectBox}>
                                <Select css={S.SSelect} onChange={selectOnChange} options={product.productDtlList?.map(pdt => {
                                    return {
                                        value: pdt.productDtlId,
                                        label: `${pdt.size.sizeName === "no" ? product.productName : pdt.size.sizeName}${pdt.tempStock > 0 ? "(수량: " + pdt.tempStock + ")" : "(품절)"}`};
                                })
                                }/>
                            </div>
                            <ul css={S.SOrderListBox}>
                                {selectedProducts.map((selectedProduct, index) => 
                                    <li key={index}>
                                        <div css={S.SListBox}>
                                            <h5>
                                                {product.productName}<br/>
                                                -{selectedProduct.sizeName}
                                            </h5>
                                            <input type="number" defaultValue={1} min={1} max={99} onChange={(e) => countOnChange(e.target, index)}/>
                                            <p>{selectedProduct.price.toLocaleString("ko-KR")}원</p>
                                            <button onClick={() => handleDeleteProductOnClick(index)}>X</button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            <div css={S.SPriceInfo}>
                                <p>Total</p>
                                <h3>{selectedProducts.reduce((total, selectedProduct) => {
                                    return total += selectedProduct.price}, 0).toLocaleString("ko-KR")}원</h3>
                            </div>
                            <div css={S.SButtonBox}>
                                <button onClick={buyNowOnClick}>BUY NOW</button>
                                <button onClick={handleAddToCartOnClick}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div css={S.SDetailContainer}>
                        <img css={S.SDDetailImg} src={product.productDetailUrl} alt="" />
                    </div>
                </div>
                <div css={S.SReviewContainer}>
                    <div css={S.SH1}>고객님들의 소중한 구매후기 ⭐</div>
                    <ul>
                        {productReview.map(rev => {
                            return <li>
                                <div css={S.SReviewList}>
                                    <div css={S.SreviewHeader}>
                                        <img src={rev.profileUrl} alt=""/>
                                        <div css={S.SNickname}>{rev.nickname}</div>
                                        <div css={S.SProductSizeBox}>
                                            <div>{product.productName} / </div>
                                            <div> size {rev.sizeName}</div>
                                        </div>
                                        <div css={S.SReivewDate}>{rev.reviewDate}</div>
                                    </div>
                                    <div css={S.SReviewContentBox}>
                                        {!!rev.reviewImgUrl ? <div><img src={rev.reviewImgUrl} alt="" css={S.SReviewImg}/></div> : <div></div>}
                                        <div css={S.SReviewContent}>{rev.reviewContent}</div>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </RootContainer>
    );
}

export default BuyProduct;
