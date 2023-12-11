import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

function OAuth2Signin(props) {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const queryClient = useQueryClient();
    useEffect(() => {
        if(!searchParams.get("token")) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        } else {
            localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
            queryClient.refetchQueries("getPrincipal");
            alert("로그인 되었습니다.")
        }
    }, []);

    return <Navigate to={"/"}/>
}

export default OAuth2Signin;