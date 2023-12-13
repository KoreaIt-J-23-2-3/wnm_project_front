import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import Mypage from '../Mypage/Mypage';
import { getReviewByUserApi, removeReviewApi } from '../../apis/api/review'; // 필요한 API 함수 import
import { useQuery, useQueryClient } from 'react-query';
import ReviewUpdateModal from '../../components/Review/ReviewModal/ReviewUpdateModal';
import Swal from 'sweetalert2';

function Review() {
    const params = useParams();
    const userId = params.userId
    const [previewImg, setPreviewImg] = useState("");
    const [getReview, setGetReivew ] = useState([]);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const [ isOpen, setOpen ] = useState(false);
    const [ selectedReview, setSelectedReview ] = useState(null);


    const getReviewbyUser = useQuery(["getReviewbyUser", userId], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getReviewByUserApi(userId, option);
            return await response;
        } catch(error) {
            console.log(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: data => {
            setGetReivew(data?.data)
        }
    })

    const handleEditClick = (review) => {
        setOpen(true);
        setSelectedReview(review);
    }

    if(getReviewbyUser.isLoading) {
        return <></>;
    }

    const handleDeleteClick = async (e) => {
        Swal.fire({
            title: "삭제 확인",
            text: "리뷰를 삭제 하시겠습니까?",

            showCancelButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#3085d6",
            cancelButtonText: "취소",
            cancelButtonColor: "#d33"
        }).then((result) => {
            if(result.isConfirmed) {
                try {
                    const option = {
                        headers: {
                            Authorization: localStorage.getItem("accessToken")
                        }
                    }
                    removeReviewApi(e.target.id, option)
                    Swal.fire({
                        title: "삭제 성공",
                        text: "리뷰가 삭제되었습니다."
                    }).then((result) => {
                        if(result.isConfirmed) {
                            window.location.reload();
                        }
                    })
                } catch (error) {
                    alert(error.message)
                } 
            } else if(result.isDismissed) {
                
            }
        })
    };


    return (
        <Mypage>
            {!!!getReviewbyUser.data.data[0]
                ? <p css={S.SPText}>작성한 리뷰가 없습니다.</p>
                :
                <>
                    <div css={S.SLayout}>
                        {getReview?.map(rdata => {
                            return <div key={rdata.reviewId} css={S.SModalContainer}>
                                        <div css={S.SModalHeader}>
                                            <div css={S.SModalHeaderImg}>
                                                <img src={rdata.productThumbnailUrl} alt={rdata.productName} />
                                            </div>
                                            <div>
                                                <h3>{rdata.productName}</h3>
                                                <p>size: {rdata.sizeName}</p>
                                            </div>
                                        </div>
                                    
                                        <div css={S.SModalBody}>
                                            <div css={S.SReviewImg}>
                                                <img src={previewImg || rdata.reviewImgUrl} alt="" />
                                            </div>
                                            <textarea disabled={true} css={S.SText} defaultValue={rdata.reviewContent}></textarea>
                                            <button id={rdata.reviewId} onClick={() => handleEditClick(rdata)} css={S.SButton}>수정하기</button>
                                            <button id={rdata.reviewId} onClick={handleDeleteClick} css={S.SButton}>삭제하기</button>
                                        </div>
                                    </div>
                        })}
                    </div>
                    <ReviewUpdateModal isOpen={isOpen} onRequestClose={() => setOpen(false)} reviewData={selectedReview}/>
                </>
            }
        </Mypage>
    );
}

export default Review;
