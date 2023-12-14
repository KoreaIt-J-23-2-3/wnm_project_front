import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { addReviewApi, updateReviewApi } from '../../../apis/api/review';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../apis/firebase/firebase';
import { Navigate, useNavigate, useParams } from 'react-router-dom'; 
import Swal from 'sweetalert2';


function ReviewUpdateModal({ isOpen, onRequestClose, reviewData }) {

    const navigate = useNavigate();
    const fileRef = useRef();
    const [ reviewfiles, setReviewFiles ] = useState();
    const [ previewImg, setPreviewImg ] = useState("");

    const [ review, setReview ] = useState({
        orderProductsId: "",
        reviewContent: "",
        reviewImgUrl: ""
    })

    useEffect(() => {
        setReview({
            reviewId: reviewData?.reviewId,
            reviewContent: reviewData?.reviewContent,
            reviewImgUrl: reviewData?.reviewImgUrl
        })
        setPreviewImg(reviewData?.reviewImgUrl);
    }, [isOpen]);
    
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
        // console.log(product)
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
                    try {
                        const desertRef = ref(storage, reviewData?.reviewImgUrl); // 파일 참조 생성
                        await deleteObject(desertRef);
                    }catch(error) {
                        console.error(error);
                    }
                    
                }
                Swal.fire({
                    title: "리뷰 수정 확인",
                    text: "리뷰를 수정 하시겠습니까?",
        
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    confirmButtonColor: "#3085d6",
                    cancelButtonText: "취소",
                    cancelButtonColor: "#d33"
                }).then(async (result) => {
                    if(result.isConfirmed) {
                        await updateReviewApi(review, option);
                        Swal.fire({
                            title: "수정 완료",
                            text: "리뷰가 수정 되었습니다."
                        }).then((ok) => {
                            if(ok.isConfirmed) {
                                onRequestClose()
                                window.location.reload();
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
                            <img src={reviewData?.productThumbnailUrl} alt={reviewData?.productName} />
                        </div>
                        <div>
                            <h3>{reviewData?.productName}</h3>
                            <p>size: {reviewData?.sizeName}</p>
                        </div>
                    </div>
                    <div css={S.SModalBody}>
                        <div css={S.SReviewImg} onClick={handleOpenFileClick}>
                            <img src={previewImg} alt="" />
                        </div>
                        <input type="file" name="reviewFile" ref={fileRef} onChange={handleChangeFile}/>
                        <textarea name="reviewContent" value={review.reviewContent} onChange={handleContentChange}></textarea>
                    </div>
                    <button css={S.SModalSubmitButton} onClick={handleSubmitClick}>
                        리뷰 수정하기
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ReviewUpdateModal;