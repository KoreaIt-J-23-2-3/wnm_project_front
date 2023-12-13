import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function OAuth2Signin(props) {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const queryClient = useQueryClient();

    useEffect(() => {
        if(!searchParams.get("token")) {
            Swal.fire({
                title: "비정상 접근",
                text: "정상적인 접근이 아닙니다."
            }).then((result) => {
                if(result.isConfirmed) {
                    navigate("/")
                }
            })
        } else {
            localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
            queryClient.refetchQueries("getPrincipal");
            Swal.fire({
                title: "로그인 성공",
                text: "로그인이 되었습니다."
            })
        }
    }, []);

    return <Navigate to={"/"}/>
}

export default OAuth2Signin;