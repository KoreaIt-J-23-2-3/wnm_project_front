import React, { useEffect, useState } from 'react';
import * as S from "./Style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { signupApi } from '../../apis/api/sign';
import Swal from 'sweetalert2';
/**@jsxImportSource @emotion/react */

function Signup(props) {
    const navigate = useNavigate();
    // daum주소코드
    const sample6_execDaumPostcode = () => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
            new window.daum.Postcode({
            oncomplete: function(data) {
                console.log(data)
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
                console.log(data.zonecode)
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                setSignupUser({
                    ...signupUser,
                    defaultAddressNumber: data.zonecode,
                    defaultAddressName: addr
                });
                document.getElementById("sample6_detailAddress").focus();
            }
            }).open();
        };
    
        return () => {
            document.body.removeChild(script);
        };
    } // daum 주소코드 끝
    
    const [ searchParams, setSearchParams ] = useSearchParams();

    const user = {
        oauth2Id: searchParams.get("oauth2Id"),
        provider: searchParams.get("provider"),
        name: "",
        nickname: "",
        email: "",
        phoneNumber: "",
        defaultAddressNumber: 0,
        defaultAddressName:"",
        defaultAddressDetailName:""
    }

    useEffect(() => {
        if(!searchParams.get("provider")){
            Swal.fire({
                title: "비정상 접근",
                text: "정상적인 접근이 아닙니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    navigate("/")
                }
            })
        }
    })

    const [ signupUser, setSignupUser ] = useState(user);
    
    console.log(signupUser)
    const handleInputChange = (e) => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value
        });
    }

    const handleSignupSubmit = async () => {
        try {
            await signupApi(signupUser);
            Swal.fire({
                title: "회원가입 성공",
                text: "회원가입 되었습니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.replace("/auth/signin");
                }
            })
        }catch(error) {
            Swal.fire({
                title: "회원가입 오류",
                text: "회원가입 중 오류가 발생하였습니다."
            })
        }
    }

    const handleCancelOnClick = () => {
        navigate(-1)
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SUserInfoContiner}>
                    <h1>회원가입</h1>
                    <div css={S.SSubTitle}>
                        <h3>회원이 되어 다양한 혜택을 경험해 보세요!</h3>
                    </div>
                    <div css={S.SUserInfoBox}>
                        <h3 css={S.STitle}>이름</h3>
                        <input type="text" 
                            name='name' 
                            placeholder='이름을 입력해주세요' 
                            onChange={handleInputChange}/>
                    </div>
                    <div css={S.SUserInfoBox}> 
                        <h3 css={S.STitle}>이메일</h3>
                        <input type="email" 
                            name='email' 
                            placeholder='이메일을 입력해주세요' 
                            onChange={handleInputChange}/>
                    </div>
                    <div css={S.SUserInfoBox}>
                        <h3 css={S.STitle}>닉네임</h3>
                        <input type="text" 
                            name='nickname' 
                            placeholder='닉네임을 입력해주세요' 
                            onChange={handleInputChange}/>
                    </div>
                    <div css={S.SUserInfoBox}>
                        <h3 css={S.STitle}>전화번호</h3>
                        <input type="text" 
                            name='phoneNumber' 
                            placeholder='전화번호를 입력해주세요' 
                            onChange={handleInputChange}/>
                    </div>
                    <div css={S.SUserInfoBox}>
                        <h3 css={S.STitle}>주소</h3>
                        <div css={S.SAddressBox}>
                            <div css={S.SAddressNumberBox}>
                                <input type="text" 
                                    name='defaultAddressNumber' 
                                    id="sample6_postcode" 
                                    placeholder="우편번호" 
                                    onChange={handleInputChange}/>
                                <div css={S.SAddressButtonBox}>
                                    <button type="button" 
                                        name='findDefaultAddressNumber' 
                                        onClick={sample6_execDaumPostcode} 
                                        value="우편번호 찾기">주소검색</button>
                                </div>
                            </div>
                            <input type="text" 
                                name='defaultAddressName' 
                                id="sample6_address" 
                                placeholder="주소"  
                                onChange={handleInputChange}/>
                            <input type="text" 
                                name='defaultAddressDetailName' 
                                id="sample6_detailAddress" 
                                placeholder="상세주소" 
                                onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div>
                        <button css={S.SSignupButton}onClick={handleSignupSubmit}>가입하기</button>
                        <button css={S.SCencelButton}onClick={handleCancelOnClick}>취소하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
