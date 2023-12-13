import React, { useEffect, useRef, useState } from 'react';
import * as S from "./Style";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../apis/firebase/firebase';
import { useQueryClient } from 'react-query';
import { deleteUserApi, updateUserApi } from '../../apis/api/user';
import Mypage from '../Mypage/Mypage';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
/** @jsxImportSource @emotion/react */

function EditUser(props) {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const profileFileRef = useRef();
    const [ uploadFile, setUploadFile ] = useState();
    const { userId } = useParams();
    const option = {
        headers: {
            Authorization: localStorage.getItem("accessToken"),
            'Content-Type': 'application/json'
        },
    }
    
    const [ userEditData, setUserEditData ] = useState({
        nickname: principal?.data?.data?.nickname,
        phoneNumber: principal?.data?.data?.phoneNumber,
        defaultAddressNumber: principal?.data?.data?.defaultAddressNumber,
        defaultAddressName: principal?.data?.data?.defaultAddressName,
        defaultAddressDetailName: principal?.data?.data?.defaultAddressDetailName,
        profileUrl: principal?.data?.data?.profileUrl
    });

    const addressDetailNameRef = useRef();

    useEffect(() => {
        if(!principal.data) {
            navigate("/auth/signin")
            Swal.fire({
                title: "비정상 접근",
                text: "로그인 후 사용해주세요."
            })
            return
        }
    }, [])

    const handleFindAddressClick = () => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);
        
        script.onload = () => {
            new window.daum.Postcode({
                oncomplete: function(data) {
                    var addr = '';
                    var extraAddr = '';
                    
                    if (data.userSelectedType === 'R') {
                        addr = data.roadAddress;
                    } else {
                        addr = data.jibunAddress;
                    }
                    if(data.userSelectedType === 'R'){
                        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                            extraAddr += data.bname;
                        }
                        if(data.buildingName !== '' && data.apartment === 'Y'){
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        if(extraAddr !== ''){
                            extraAddr = ' (' + extraAddr + ')';
                        }
                    }

                    setUserEditData({
                        ...userEditData,
                        defaultAddressNumber: data.zonecode,
                        defaultAddressName: addr,
                        defaultAddressDetailName: ""
                    })

                    addressDetailNameRef.current.focus();
                }
            }).open();
        };
        
        return () => {
            document.body.removeChild(script);
        };
    } // daum 주소코드 끝

    const HandleUserEditDataOnChange = (e) => {
        setUserEditData({
            ...userEditData,
            [e.target.name]: e.target.value
        });
    }
    
    const HandleCancle = () => {
        window.location.replace("/");
    }

    const HandleDeleteUser = async () => {
        if(window.confirm("정말로 탈퇴하시겠습니까?")) {
            try {
                const response = await deleteUserApi(userId, option);
                alert("회원 탈퇴 처리가 완료되었습니다.");
                localStorage.removeItem("accessToken");
                window.location.replace("/");
            } catch (error) {
                alert(error.response.data);
            }
        }else {
            return;
        }
    }

    const HandleProfileUploadClick = () => {
        if(window.confirm("프로필 사진을 변경하시겠습니까?")) {
            profileFileRef.current.click();
        }
    }

    const HandleProfileChange = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        setUploadFile(file);

        reader.onload = (e) => {
            setUserEditData({...userEditData, profileUrl: e.target.result});
        };
        reader.readAsDataURL(file);
    };



    const HandleEditUser = async () => {
        try {
                if(!!uploadFile) {
                    const storageRef = ref(storage, `files/profile/${uploadFile.name}`);
                    uploadBytesResumable(storageRef, uploadFile)
                        .then((uploadTaskSnapshot) => {
                            getDownloadURL(storageRef)
                                .then((downloadUrl) => {
                                    userEditData.profileUrl = downloadUrl;
                                    updateUserApi(userId, userEditData, option).then((response) => {
                                        if (response.status === 200) {
                                            alert("회원정보 수정이 완료되었습니다.");
                                            window.location.reload();
                                        } else {
                                            throw new Error("회원정보 수정 실패");
                                        }
                                    });
                                })
                        });
                        
                }else {
                    const response = await updateUserApi(userId, userEditData, option)
                        if (response.status === 200) {
                            alert("회원정보 수정이 완료되었습니다.");
                            window.location.reload();
                        } else {
                            throw new Error("회원정보 수정 실패");
                        }
                }
        } catch (error) {
            console.log(error)
            if (Object.keys(error.response).includes("nickname")) {
                console.log(error.response)
                alert("이미 사용중인 닉네임입니다. 다시 입력하세요.");
            } else {
                console.log(error)
            }
        }
    }

return (
    <Mypage>
        <div css={S.SContainer}>
            <div css={S.STopTitle}>
                <h2>회원 정보 수정</h2>
            </div>
            <div css={S.SProfilContainer}>
                <div css={S.SImgBox} onClick={HandleProfileUploadClick}>
                    <img src={userEditData.profileUrl} alt="프로필 이미지" />
                </div>
                <p>프로필 변경 시 <br/>
                    이미지를 클릭하여 변경해주세요.</p>
                <input css={S.Sfile} type="file" onChange={HandleProfileChange} ref={profileFileRef} />
            </div>
            <div css={S.SUserInfoContiner}>
                <div css={S.SUserInfoBox}> 
                    <h3 css={S.STitle}>닉네임</h3> 
                    <input type="text" 
                        name='nickname' 
                        value={userEditData.nickname}
                        onChange={HandleUserEditDataOnChange} />
                </div>
                <div css={S.SUserInfoBox}> 
                    <h3 css={S.STitle}>이름</h3> 
                    <input type="text" 
                        value={principal?.data?.data?.name}
                        disabled={true}/>
                </div>
                <div css={S.SUserInfoBox}> 
                    <h3 css={S.STitle}>이메일</h3> 
                    <input type="text" 
                        value={principal?.data?.data?.email}
                        disabled={true}/>
                </div>
                <div css={S.SUserInfoBox}> 
                    <h3 css={S.STitle}>휴대전화</h3> 
                    <input type="text" 
                        value={principal?.data?.data?.phoneNumber}
                        disabled={true}/>
                </div>
                <div css={S.SUserInfoBox}>
                    <h3 css={S.STitle}>주소</h3>
                        <div css={S.SAddressBox}>
                            <div css={S.SAddressNumberBox}>
                                <input type="text" 
                                    placeholder='우편번호'
                                    value={userEditData.defaultAddressNumber}
                                    disabled={true}/>
                                <div css={S.SAddressButtonBox}>
                                    <button name='findDefaultAddressNumber' 
                                        onClick={handleFindAddressClick}>
                                    주소검색</button>
                                </div>
                            </div>
                            <input type="text" 
                                placeholder='주소' 
                                value={userEditData.defaultAddressName}
                                disabled={true}/>
                            <input type="text" 
                                placeholder='상세주소' 
                                name="defaultAddressDetailName"
                                value={userEditData.defaultAddressDetailName}
                                onChange={HandleUserEditDataOnChange}
                                ref={addressDetailNameRef}/>
                        </div>
                    </div>
                </div>
                <div css={S.SEditButtonBox}>
                    <button css={S.SEditButton} onClick={HandleEditUser}>회원 정보 수정</button>
                    <button css={S.SCancelbutton} onClick={HandleCancle}>취소</button>
                </div>
                <div css={S.SDeleteButtonBox}>
                    <button onClick={HandleDeleteUser}>
                        회원 탈퇴
                    </button>
                </div>
            </div>
        </Mypage> 
    );
}
export default EditUser;