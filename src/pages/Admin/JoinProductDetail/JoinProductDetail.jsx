import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductMstApi } from '../../../apis/api/product';
import Mypage from '../../Mypage/Mypage';
import Swal from 'sweetalert2';

function JoinProductDetail(props) {
    const param = useParams()
    const productMstId = parseInt(param.productMstId)
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

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

    const getProduct = useQuery(["getProduct"], () => {
        return getProductMstApi(productMstId);
    },{
        refetchOnWindowFocus: false,
        retry: 0
    })

    
    if(getProduct.isLoading) {
        return <></>
    }

    const handleReturnToEditPageClick = () => {
        navigate(-1);
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>상품 상세 정보</h2>
                </div>
                <div css={S.SSubTitleBox}>
                    <h3>상품 정보</h3>
                    <button onClick={handleReturnToEditPageClick}>전체 상품 리스트</button>
                </div>
                <div css={S.STableBox}>
                    <table css={S.SToptable}>
                        <tbody>
                        <tr css={S.SThtdBox}>
                            <th>상품 추가 일자</th>
                            <td>{getProduct?.data?.data.createDate}</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>상품 이름</th>
                            <td>{getProduct?.data?.data.productName}</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>상품 설명</th>
                            <td>{getProduct?.data?.data.productDetailText}</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>동물 종류 이름[ID]</th>
                            <td>{getProduct?.data?.data.petTypeName}[{getProduct?.data?.data.petTypeId}]</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>카테고리 이름[ID]</th>
                            <td>{getProduct?.data?.data.productCategoryName}[{getProduct?.data?.data.productCategoryId}]</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>상품 마스터 ID</th>
                            <td>{productMstId}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div css={S.SSubTitleBox}>
                    <h3>상품 사이즈별 정보</h3>
                </div>
                <div css={S.STableBox}>
                    {getProduct?.data?.data.productDtlList?.map(dtl => {
                    return <table key={dtl.productDtlId} css={S.SBottomTable}>
                        <tbody>
                            <tr css={S.SThtdBox}>
                                <th>상품 상세(사이즈별) ID</th>
                                <td>{dtl.productDtlId}</td>
                            </tr>
                            <tr css={S.SThtdBox}>
                                <th>가격</th>
                                <td>{dtl.price}</td>
                            </tr>
                            <tr css={S.SThtdBox}>
                                <th>사이즈[사이즈ID]</th>
                                <td>{dtl.size.sizeName}[{dtl.sizeId}]</td>
                            </tr>
                            <tr css={S.SThtdBox}>
                                <th>실제 재고</th>
                                <td>{dtl.actualStock}</td>
                            </tr>
                            <tr css={S.SThtdBox}>
                                <th>임시 재고(실제 재고 - 주문재고)</th>
                                <td>{dtl.tempStock}</td>
                            </tr>
                        </tbody>
                    </table>
                    })}
                </div>
                <div css={S.SImgContainer}>
                    <div>
                        <h2 css={S.SH2}>상품 메인 이미지</h2>
                    </div>
                    <div>
                        <img src={getProduct?.data?.data.productThumbnailUrl} alt='' width={'700px'}/>
                    </div>
                    <div css={S.SMidBox}>
                        <h3>상품 메인 이미지 URL</h3>
                        <div>{getProduct?.data?.data.productThumbnailUrl}</div>
                    </div>
                    <div>
                        <h2 css={S.SH2}>상품 상세 정보 이미지</h2>
                    </div>
                    <div>
                        <img src={getProduct?.data?.data.productDetailUrl} alt='' width={'700px'}/>
                    </div>
                    <div css={S.SMidBox}>
                        <h3>상품 상세 정보 이미지 URL</h3>
                        <div>{getProduct?.data?.data.productDetailUrl}</div>
                    </div>
                    <button css={S.SButton} onClick={handleReturnToEditPageClick}>전체 상품 리스트</button>
                </div>

            </div>
        </Mypage>
    );
}

export default JoinProductDetail;