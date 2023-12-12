import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useParams } from 'react-router';
import { useQuery, useQueryClient } from 'react-query';
import { deleteAnnouncementApi, getAnnouncementByIdApi } from '../../../apis/api/announcement';
import RootContainer from '../../../components/RootContainer/RootContainer';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function AnnouncementDetail(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const {announcementId} = useParams();
    const [ announcementData, setAnnouncementData ] = useState();

    const getAnnouncementById = useQuery(["getAnnouncementById", announcementData], async () => {
        try {
            const response = await getAnnouncementByIdApi(announcementId);
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    {
        retry: 0,
        onSuccess: response => {
            setAnnouncementData(response?.data)
        }
    })

    if(getAnnouncementById.isLoading) {
        return <div>로딩중</div>
    }

        const handleEditClick = (announcementDataId) => {
        navigate(`/admin/edit/announcement/${announcementDataId}`)
    }

    const handleDeleteClick = async (announcementDataId) => {
        await Swal.fire({
            title: "삭제 확인",
            text: "공지사항을 삭제 하시겠습니까?",

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
                    const response = deleteAnnouncementApi(announcementDataId, option);
                    Swal.fire({
                        title: "삭제 성공",
                        text: "공지사항이 삭제 되었습니다."
                    }).then((result) => {
                        if(result.isConfirmed) {
                            navigate("/notice")
                        }
                    })
                    return response;
                } catch (error) {
                    alert(error.message)
                } 
            } else if(result.isDismissed) {
                
            }
        })
    }

    const HandleCancle = () => {
        navigate(-1)
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <tbody>
                            <tr css={S.SThtdBox}>
                                <th>작성자</th>
                                <td>ADMIN</td>
                                <th>작성일</th>
                                <td>{announcementData?.createDate}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr css={S.STitleBox}>
                                <th>제목</th>
                                <td colSpan="4">{announcementData?.title}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div css={S.SContentBox}>
                    <p>{announcementData?.content}</p>
                </div>
                {principal?.data?.data?.roleName === "ROLE_ADMIN" 
                ?
                <>
                    <div css={S.SEditButtonBox}>
                        <button css={S.SEditButton} onClick={() => handleEditClick(announcementData.announcementId)}>공지사항 수정</button>
                        <button css={S.SCancelbutton} onClick={HandleCancle}>취소</button>
                    </div>
                    <div css={S.SDeleteButtonBox}>
                        <button onClick={() => handleDeleteClick(announcementData.announcementId)}>
                            공지사항 삭제
                        </button>
                    </div>
                </>
                :
                <></>
                }   
            </div>
        </RootContainer>
    );
}

export default AnnouncementDetail;