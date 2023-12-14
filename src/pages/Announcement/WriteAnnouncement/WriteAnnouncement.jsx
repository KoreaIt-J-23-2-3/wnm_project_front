import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../Mypage/Mypage';
import { writeAnnouncementApi } from '../../../apis/api/announcement';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function WriteAnnouncement(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const navigate = useNavigate();

    const [ announcementData, setAnnouncementData ]= useState({
        title: "",
        content: "",
        type: "공지사항",
        isPinned: 0,
        createDate: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnnouncementData({
            ...announcementData,
            [name]: value
        })
    }

    const handleCheckBoxChange = (e) => {
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

    const handleWriteClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await writeAnnouncementApi(announcementData, option)
            Swal.fire({
                title: "등록 성공",
                text: "공지사항이 등록 되었습니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    navigate("/notice")
                }
            })
            return response;
        } catch (error) {
            alert(error)
        }
    }


    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>공지사항 작성</h2>
                </div>
                <div css={S.SubContainer}>
                    <div css={S.SuSubContainer}>
                        <h1>공지사항 등록</h1>
                        <div css={S.STitle}>
                            <input name='title' type="text" placeholder='제목' onChange={handleInputChange} />
                            <div css={S.SFixBox}>
                                <p>고정 여부</p>
                                <input name='isPinned' type="checkbox" onChange={handleCheckBoxChange} />
                            </div>
                        </div>
                        <textarea name="content" id="" cols="30" rows="30" placeholder='내용' onChange={handleInputChange}></textarea>
                        <button onClick={handleWriteClick}>등록 하기</button>
                    </div>
                </div>
            </div>
        </Mypage>
    );
}

export default WriteAnnouncement;