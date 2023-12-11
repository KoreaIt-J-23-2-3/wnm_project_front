import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import mainview from '../../images/Main/MainView.jpg'
import RootContainer from '../../components/RootContainer/RootContainer';

function Main(props) {

    localStorage.removeItem("orderData")
    localStorage.removeItem("isCart")
    
    return (
        <RootContainer>
            <div css={S.SMainViewImgBox}>
                <img src={mainview} alt="" />
            </div>
        </RootContainer>
    );
}

export default Main;