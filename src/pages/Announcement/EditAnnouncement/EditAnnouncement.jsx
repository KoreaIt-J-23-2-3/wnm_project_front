import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { editAnnouncementApi, getAnnouncementByIdApi } from '../../../apis/api/announcement';
import Mypage from '../../Mypage/Mypage';
import Swal from 'sweetalert2';

function EditAnnouncement(props) {

    const { announcementId } = useParams();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const navigate = useNavigate();

    const [ announcementData, setAnnouncementData ]= useState({
        title: "",
        content: "",
        isPinned: 0,
        createDate: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAnnouncementByIdApi(announcementId);
                setAnnouncementData({
                    title: response?.data?.title,
                    content: response?.data?.content,
                    isPinned: response?.data?.isPinned,
                    createDate: response?.data?.createDate,
                });
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, [announcementId])

    const handleCheckBoxChange = () => {
        setAnnouncementData({
            ...announcementData,
            isPinned: announcementData.isPinned === 0 ? 1 : 0
        });
    }

    

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnnouncementData({
            ...announcementData,
            [name]: value
        })
    }

    const handleEditClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await editAnnouncementApi(announcementId, announcementData, option);
            Swal.fire({
                title: "수정 성공",
                text: "공지사항이 수정 되었습니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    navigate("/notice")
                }
            })
            return response;
        } catch (error) {
            console.log(error)
        }
    }


    return (
        
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>공지사항 수정</h2>
                </div>
                <div css={S.SubContainer}>
                    <div css={S.SuSubContainer}> 
                        <h1>공지사항 수정</h1>
                        <div css={S.STitle}>
                            <input name='title' type="text" placeholder='제목' onChange={handleInputChange} defaultValue={announcementData?.title} />
                            <div div css={S.SFixBox}>
                                <p>고정 여부</p>
                                <input name='isPinned' type="checkbox" onChange={handleCheckBoxChange} checked={announcementData?.isPinned === 1} />
                            </div>
                        </div>
                        <textarea name="content" id="" cols="30" rows="30" placeholder='내용' onChange={handleInputChange} defaultValue={announcementData?.content}></textarea>
                        <button onClick={handleEditClick}>수정 하기</button>
                    </div>
                </div>
            </div>
        </Mypage>
    );
}

export default EditAnnouncement;