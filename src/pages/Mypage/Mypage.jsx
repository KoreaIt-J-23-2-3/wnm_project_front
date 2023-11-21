import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';

function Mypage({ children }) {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    useEffect(() => {
        if(!principal.data) {
            alert("로그인 후 사용해주세요.")
            navigate("/auth/signin")
            return
        }
    }, [])

    if (principal?.data?.data?.roleName === 'ROLE_ADMIN') {
        return (
            <div>
                <div css={S.STitle}>
                    <h2>My Page</h2>
                </div>
                <div css={S.SList}>
                <ul>
                        <li>
                            <h4><Link to="/admin/users">회원관리</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/order">회원주문관리</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/product">상품등록</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/product/edit">상품관리</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/incoming">입고관리</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/outgoing">출고관리</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/notices">공지사항</Link></h4>
                        </li>
                    </ul>
                </div>
                <div css={S.SContent}>
                </div>
            </div>
        );
    } else {
        return (
                <RootContainer>
                    <div css={S.SContainer}>
                        <h2>My Page</h2>
                            <div css={S.SSubConatainer}>
                                <ul>
                                    <li>
                                        <h4><Link to={`/orders/${principal?.data?.data.userId}`}>주문내역조회</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to={`/useredit/${principal?.data?.data.userId}`}>회원정보</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/review">리뷰</Link></h4>
                                    </li>
                                </ul>
                                <div css={S.SChangeContainer}>
                                    {children}
                                </div>
                            </div>
                    </div>
                </RootContainer>
            );
    }
}

export default Mypage;