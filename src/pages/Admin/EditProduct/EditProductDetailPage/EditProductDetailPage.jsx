import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getProductsApi, updateProductApi } from '../../../../apis/api/product';
import { useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../apis/firebase/firebase';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../../Mypage/Mypage';

function EditProductDetailPage(props) {


    const params = useParams("productDtlId")
    const productMstId = params.productMstId
    const [ productThumbnailFile, setProductThumbnailFile ] = useState();
    const [ productDetailImgFile, setProductDetailImgFile ] = useState();
    const [ productThumbnailSrc, setProductThumbnailSrc ] = useState("");
    const [ productDetailImgSrc, setProductDetailImgSrc ] = useState("");
    const searchData = {
        petTypeName: "all",
        productCategoryName: "all",
        searchOption: 'number',
        searchValue: parseInt(productMstId),
        sortOption: 'number',
        pageIndex: 1}
    const [ productData, setProductData ] = useState({});
    console.log(productData)


    let productMinimumData = [];



    const getProduct = useQuery(["getProduct"], async () => {
        const response = await getProductsApi(searchData);
        return response;
    },
    {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            setProductThumbnailSrc(response?.data[0]?.productThumbnailUrl)
            setProductDetailImgSrc(response?.data[0]?.productDetailUrl);
            setProductData({
                productName: response?.data[0].productName,
                productDetailText: response?.data[0].productDetailText,
                productThumbnailUrl: response?.data[0].productThumbnailUrl,
                productDetailUrl: response?.data[0].productDetailUrl,
                no: response?.data[0].no,
                XS: response?.data[0].XS,
                S: response?.data[0].S,
                M: response?.data[0].M,
                L: response?.data[0].L,
                XL: response?.data[0].XL,
                XXL: response?.data[0].XXL,
            })
            console.log(response?.data[0])

            for(let j = 0; j < response?.data.length; j++) {
                const numbers = [parseInt(response?.data[j].no), parseInt(response?.data[j].XS), parseInt(response?.data[j].S), parseInt(response?.data[j].M), parseInt(response?.data[j].L), parseInt(response?.data[j].XL), parseInt(response?.data[j].XXL)]
                const nums = [];
        
                for(let i = 0; i < numbers.length; i++) {
                    if(isNaN(numbers[i])) {
                        numbers[i] = 0;
                    }
                    if(numbers[i] !== 0) {
                        nums.push(parseInt(numbers[i]))
                    }
                }
                let lastNum = nums[0]
                for(let i = 0; i < nums.length; i++) {
                    if(lastNum > nums[i]) {
                        lastNum = nums[i]
                    }
                }
                productMinimumData.push({
                    productName: response?.data[j].productName,
                    productDetailText: response?.data[j].productDetailText,
                    productThumbnailUrl: response?.data[j].productThumbnailUrl,
                    productDetailUrl: response?.data[j].productDetailUrl,
                    no: response?.data[j].no,
                    XS: response?.data[j].XS,
                    S: response?.data[j].S,
                    M: response?.data[j].M,
                    L: response?.data[j].L,
                    XL: response?.data[j].XL,
                    XXL: response?.data[j].XXL,
                })

                console.log(productMinimumData)
            }
    }
    })
    if(getProduct.isLoading) {
        return <></>
    }


    const handleProductDataOnChange = (e) => {
        setProductData({
            ...productData,
            [ e.target.name ]: e.target.value
        })
    }

    const handleThumbnailChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        setProductThumbnailFile(file)
        reader.onload = (e) => {
            const productThumnailUrl = e.target.result;
            setProductThumbnailSrc(productThumnailUrl)
        }
        reader.readAsDataURL(file)
    }

    const handleDetailImgChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        setProductDetailImgFile(file)
        reader.onload = (e) => {
            const productDetailImgUrl = e.target.result;
            setProductDetailImgSrc(productDetailImgUrl)
        }
        reader.readAsDataURL(file)
    }



    const handleUpdateSubmit = async () => {
        try {
            if(!!productThumbnailFile) {
                const thumbnailStorageRef = ref(storage, `files/product/${productThumbnailFile?.name}`);
                await uploadBytesResumable(thumbnailStorageRef, productThumbnailFile);
                const downLoadURL = await getDownloadURL(thumbnailStorageRef);
                productData.productThumbnailUrl = downLoadURL;
            }

            if(!!productDetailImgFile) {
                const detailImgStorageRef = ref(storage, `files/product/${productDetailImgFile?.name}`);
                await uploadBytesResumable(detailImgStorageRef, productDetailImgFile);
                const downLoadURL = await getDownloadURL(detailImgStorageRef);
                productData.productDetailUrl = downLoadURL
            }

            await updateProductApi(productMstId, productData);
            alert("수정이 완료되었습니다.")
        }catch(error) {
            console.log(error.response.data)
        }
    }



    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>상품 정보 수정</h2>
                    <div css={S.SubContainer}>

                    <div css={S.SImg}>
                        <div><h1 css={S.SH1}>상품 메인 이미지 수정</h1></div>
                        <div>
                            <img src={productThumbnailSrc} alt='썸네일 이미지' width={'700px'} onChange={handleProductDataOnChange}/>
                        </div>
                        <div>
                            <input type="file" id="fileInput" onChange={handleThumbnailChange} css={S.SFileSelect} />
                            <label htmlFor="fileInput" css={S.SLabelUpload}>메인 이미지 수정 파일 업로드</label>
                        </div>
                        <div><h1 css={S.SH1}>상품 상세 이미지 수정</h1></div>
                        <div>
                            <img src={productDetailImgSrc} alt='상품 디테일 이미지' width={'700px'} onChange={handleProductDataOnChange}/>
                        </div>
                        <div>
                            <input type="file" id="fileInput" onChange={handleDetailImgChange} css={S.SFileSelect} />
                            <label htmlFor="fileInput" css={S.SLabelUpload}>상세이미지 수정 파일 업로드</label>
                        </div>
                        <div><h1 css={S.SH1}>상품 정보 수정</h1></div>
                    </div>
                    <div css={S.SInformation}>
                        <div css={S.SInfoNameInput}>
                            <h2>상품명</h2>
                            <input type="text" name='productName' defaultValue={getProduct?.data?.data?.productName} onChange={handleProductDataOnChange}/>
                        </div>
                        <div css={S.SInfoTextInput}>
                            <h2>상품 설명</h2>
                            <textarea type="text" name='productDetailText' defaultValue={getProduct?.data?.data?.productDetailText} onChange={handleProductDataOnChange}/>
                        </div>
                        <div css={S.SInfoSizeInput}>
                            <h2>사이즈별 가격</h2> 
                            <ul>
                            {productData.no === "" ?
                                <>
                                    <li><label>XS</label><input value={productData.XS} type='text' name='XS' onChange={handleProductDataOnChange}/></li>
                                    <li><label>S</label><input value={productData.S} type='text' name='S' onChange={handleProductDataOnChange}/></li>
                                    <li><label>M</label><input value={productData.M} type='text' name='M' onChange={handleProductDataOnChange}/></li>
                                    <li><label>L</label><input value={productData.L} type='text' name='L' onChange={handleProductDataOnChange}/></li>
                                    <li><label>XL</label><input value={productData.XL} type='text' name='XL' onChange={handleProductDataOnChange}/></li>
                                    <li><label>XXL</label><input value={productData.XXL} type='text' name='XXL' onChange={handleProductDataOnChange}/></li>
                                </> :
                                <>
                                    <li>NO SIZE <input value={productData.no} type='text' name='no' onChange={handleProductDataOnChange}/></li>
                                </>}
                            </ul>
                        </div>
                    </div>
                    <div css={S.SSubmit}>
                        <button onClick={handleUpdateSubmit} css={S.SLabelUpload}>등록하기</button>
                    </div>
                </div>
            </div>
        </Mypage>
    );
}

export default EditProductDetailPage;