import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { addReviewApi } from '../../../apis/api/review';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../apis/firebase/firebase';
import { useNavigate } from 'react-router-dom'; 
import swal from 'sweetalert';
import Swal from 'sweetalert2';

function ReviewModal({ isOpen, onRequestClose, product, userId }) {

    const navigate = useNavigate();
    const fileRef = useRef();
    const [ reviewfiles, setReviewFiles ] = useState();
    const [ previewImg, setPreviewImg ] = useState("");

    const [ review, setReview ] = useState({
        orderProductsId: product.orderProductsId,
        reviewContent: "",
        reviewImgUrl: ""
    })
    
    const handleOpenFileClick = () => {
        fileRef.current.click();
    }
    
    const handleChangeFile = (e) => {
        setReviewFiles(e.target.files[0]);

        const reader = new FileReader();

        reader.onload = (e) => {
            setPreviewImg(e.target.result);
        }

        reader.readAsDataURL(e.target.files[0]);
    }


    const handleContentChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmitClick = async () => {
            try { 
                const option = {
                    headers: {
                        Authorization: !!localStorage.getItem("accessToken")
                        ? localStorage.getItem("accessToken") : ""
                    }
                }
                if(!!reviewfiles) {
                    const reviewImgStorageRef = ref(storage, `files/review/${reviewfiles?.name}`);
                    await uploadBytesResumable(reviewImgStorageRef, reviewfiles);
                    const downLoadURL = await getDownloadURL(reviewImgStorageRef);
                    review.reviewImgUrl = downLoadURL
                }
                Swal.fire({
                    title: "리뷰 등록 확인",
                    text: "리뷰를 등록 하시겠습니까?",
        
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    confirmButtonColor: "#3085d6",
                    cancelButtonText: "취소",
                    cancelButtonColor: "#d33"
                }).then(async (result) => {
                    if(result.isConfirmed) {
                        await addReviewApi(review, option);
                        Swal.fire({
                            title: "등록 완료",
                            text: "리뷰가 등록 되었습니다."
                        }).then((ok) => {
                            if(ok.isConfirmed) {
                                onRequestClose()
                                navigate(`/mypage/${userId}/review`);
                            }
                        })
                    }
                })
            }catch(error) {
                console.error(error);  
    }
}

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '0px',
                }
            }}
            contentLabel="Example Modal"
        >
            <div>
                <div css={S.SModalContainer}>
                    <h2>리뷰작성</h2>
                    <div css={S.SModalHeader}>
                        <div css={S.SModalHeaderImg}>
                            <img src={product?.productDtl?.productMst.productThumbnailUrl} alt={product?.productDtl.productDtlId} />
                        </div>
                        <div>
                            <h3>{product?.productDtl?.productMst.productName}</h3>
                            <p>size: {product?.productDtl?.size.sizeName}</p>
                        </div>
                    </div>
                    <div css={S.SModalBody}>
                        <div css={S.SReviewImg} onClick={handleOpenFileClick}>
                            <img src={previewImg} alt="" />
                        </div>
                        <input type="file" name="reviewFile" ref={fileRef} onChange={handleChangeFile}/>
                        <textarea name="reviewContent" onChange={handleContentChange}></textarea>
                    </div>
                    <button css={S.SModalSubmitButton} onClick={handleSubmitClick}>
                        리뷰 등록하기
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ReviewModal;