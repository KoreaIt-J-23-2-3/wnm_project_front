import React, { useEffect } from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

function OAuth2Signin(props) {
    
    const [ searchParams, setSearchParams ] = useSearchParams();

    useEffect(() => {
        console.log(searchParams)
        localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
    }, [])

    return <Navigate to={"/"}/>;
}

export default OAuth2Signin;