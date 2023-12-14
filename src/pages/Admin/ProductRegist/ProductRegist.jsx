import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../../apis/firebase/firebase';
import { addProductApi } from '../../../apis/api/product';
import Mypage from '../../Mypage/Mypage';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProductRegist(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const navigate = useNavigate();
    const productThumnailImgRef = useRef();
    const productDetailImgRef = useRef();
    const [uploadFiles, setUploadFiles] = useState([]);
    const [uploadDetailImgFile, setUploadDetailImgFile] = useState([]);
    const [productThumbnailUrlSrc , setProductThumbnailUrlSrc ] = useState(); 
    const [productDetailUrlSrc, setProductDetailUrlSrc] = useState();
    
    const reader = new FileReader();
    
    const petTypes = [
        { value: 1, label: "강아지" },
        { value: 2, label: "고양이" }
    ]
    
    const productDogCategoeies = [
        { value: 1, label: "홈·리빙" },
        { value: 2, label: "산책" },
        { value: 3, label: "이동" },
        { value: 4, label: "패션" },
        { value: 5, label: "장난감" },
    ]
    
    const productCatCategoeies = [
        { value: 1, label: "홈·리빙" },
        { value: 2, label: "산책" },
        { value: 3, label: "이동" },
        { value: 5, label: "장난감" },
    ]

    const [ product, setProduct ] = useState({
        productName: "",
        price: 0,
        productDetailText: "",
        productThumbnailUrl: "",
        productDetailUrl: "",
        // default값을 각 옵션들의 defalut값의 value로 맞춰놈
        petTypeId: 1,
        productCategoryId: 1
    })

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

    const handleProductThumnailImgUploadClick = () => {
        Swal.fire({
            title: "상품 메인 사진 등록",
            text: "상품 메인 사진을 등록하시겠습니까?",

            showCancelButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#3085d6",
            cancelButtonText: "취소",
            cancelButtonColor: "#d33"
        }).then((result) => {
            if(result.isConfirmed) {
                productThumnailImgRef.current.click();
            }
        })
    }

    const handleProductDetailImgUploadClick = () => {
        Swal.fire({
            title: "상품 상세 사진 등록",
            text: "상품 상세 사진을 등록하시겠습니까?",

            showCancelButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#3085d6",
            cancelButtonText: "취소",
            cancelButtonColor: "#d33"
        }).then((result) => {
            if(result.isConfirmed) {
                productDetailImgRef.current.click();
            }
        })
    }


    const handleProductThumnailImgChange = (e) => {
        const file = e.target.files[0];
        setProductThumbnailUrlSrc(file);

        if(file === "") {
            setUploadFiles([]);
            setProductThumbnailUrlSrc("");
            return;
        } 

        setUploadFiles([file]);

        reader.onload = (e) => {
            const productThumnailImageUrl = e.target.result;
            setProductThumbnailUrlSrc(productThumnailImageUrl);

            if(!!uploadFiles) {
                const storageRef = ref(storage, `files/product/${file.name}`);
    
                uploadBytesResumable(storageRef, file)
                .then((uploadTaskSnapshot) => {
                    getDownloadURL(storageRef)
                        .then((downloadUrl) => {
                            setProduct({
                                ...product,
                                productThumbnailUrl: downloadUrl,
                            });
                        });
                });
            }
        }
        reader.readAsDataURL(file);
    }

    const handleProductDetailImgChange = (e) => {
        const file = e.target.files[0];
        setUploadDetailImgFile(file);

        if(file === "") {
            setUploadFiles([]);
            setProductDetailUrlSrc("");
            return;
        } 

        reader.onload = (e) => {
            const productDetaimgUrl = e.target.result;
            setProductDetailUrlSrc(productDetaimgUrl);

            if(!!uploadFiles) {
                const storageRef = ref(storage, `files/product/${file.name}`);
    
                uploadBytesResumable(storageRef, file)
                .then((uploadTaskSnapshot) => {
                    getDownloadURL(storageRef)
                        .then((downloadUrl) => {
                            setProduct({
                                ...product,
                                productDetailUrl: downloadUrl,
                            });
                        });
                });
            }
        };
        reader.readAsDataURL(file);
    }

    const handleProductSubmitClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: !!localStorage.getItem("accessToken")
                    ? localStorage.getItem("accessToken") : ""
                }
            }
            await addProductApi(product, option);
            Swal.fire({
                title: "상품 등록",
                text: "상품이 등록 되었습니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.replace("/admin/product/edit")
                }
            })
        } catch (error) {
            console.error(error);
        }    
    }     

    const handleInputChange = (e) => {
        setProduct({
            ...product,
                [e.target.name]: e.target.value
        })
    }

    const handlePetTypeOptionChange = (e) => {
        setProduct({
            ...product,
            petTypeId: parseInt(e.target.value)
        })
    }

    const handleCategoryTypeOptionChange = (e) => {
        setProduct({
            ...product,
            productCategoryId: parseInt(e.target.value)
        })
        
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>상품 등록</h2>
                </div>
                <div css={S.SubContainer}>
                    <div>
                        <h1 css={S.SH1}>상품 메인 이미지 등록</h1>
                    </div>
                    <div css={S.SImgBox} >
                        <img src={productThumbnailUrlSrc} alt='상품 메인 이미지'/>
                    </div>
                    <div css={S.SButtonBox}>
                        <input css={S.Sfile} type="file" onChange={handleProductThumnailImgChange} ref={productThumnailImgRef}/>
                        <button onClick={handleProductThumnailImgUploadClick}>메인 이미지 수정 파일 업로드</button>
                    </div>
                    <div>
                        <h1 css={S.SH1}>상품 상세 이미지 등록</h1>
                    </div>
                    <div css={S.SImgBox}>
                        <img src={productDetailUrlSrc} alt='상품 상세 이미지'/>
                    </div>
                    <div css={S.SButtonBox}>
                        <input css={S.Sfile} type="file" onChange={handleProductDetailImgChange} ref={productDetailImgRef}/>
                        <button onClick={handleProductDetailImgUploadClick}>상품 상세 이미지 파일 업로드</button>
                    </div>
                    <div>
                        <h1 css={S.SH1}>상품 정보 등록</h1>
                    </div>
                    <div css={S.SInputBox}>
                        <div css={S.SInfoInput}>
                            <h2>상품명</h2> 
                            <input type="text" 
                                name='productName'
                                placeholder='상품명'
                                onChange={handleInputChange}/>
                        </div>
                        <div css={S.SInfoInput}>
                            <h2>상품 설명</h2>
                            <textarea type="text" 
                                name='productDetailText'
                                placeholder='상품 설명'
                                onChange={handleInputChange}/>
                        </div>
                        <div css={S.SInfoInput}>
                            <h2>동물타입</h2> 
                            <select 
                                options={petTypes}
                                onChange={handlePetTypeOptionChange}
                                css={S.SSelect}>
                                {petTypes.map(type => {
                                    return <option key={type.value} value={type.value} label={type.label}>{type.label}</option>
                                })}
                            </select>
                        </div>
                        {product.petTypeId === 1 ? 
                            <div css={S.SInfoInput}>
                                <h2>카테고리</h2>
                                <select
                                    options={productDogCategoeies}
                                    onChange={handleCategoryTypeOptionChange}
                                    css={S.SSelect}>
                                    {productDogCategoeies.map(category => {
                                        return <option key={category.value} value={category.value} label={category.label}>{category.label}</option>
                                    })}
                                </select> 
                            </div>
                            :
                            <div css={S.SInfoInput}>
                                <h2>카테고리</h2>
                                <select
                                    options={productCatCategoeies}
                                    onChange={handleCategoryTypeOptionChange}
                                    css={S.SSelect}>
                                    {productCatCategoeies.map(category => {
                                        return <option key={category.value} value={category.value} label={category.label}>{category.label}</option>
                                    })}
                                </select> 
                            </div>
                        }
                        <div css={S.SInfoInput}>
                            <h2>가격</h2>
                            <input type="text" name='price' placeholder='가격' onChange={handleInputChange} />
                            <h4>*사이즈별 가격 설정은 등록 후 수정 페이지에서 수정*</h4>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleProductSubmitClick} css={S.SButton}>등록하기</button>
                    </div>
                </div>
            </div>
        </Mypage>
    );
}

export default ProductRegist;