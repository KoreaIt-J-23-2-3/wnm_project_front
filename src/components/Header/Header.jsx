import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import logo from '../../images/Logo/LongLogo_lg.png'
import { Link, useNavigate } from 'react-router-dom';
import { TbShoppingBag } from "react-icons/tb";
import { useQueryClient } from 'react-query';
import Swal from 'sweetalert2';

function Header(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const [ isSubMenu, setIsSubMenu ] = useState(false);
    const [ selectedMenu, setSelectedMenu ] = useState(null);

    const menus = [
        { name: 'Dog', subMenus: ['HomeLiving', 'Movement', 'Fashion', 'Toy', 'Walk'] },
        { name: 'CustomerService', subMenus: ['Notice'] },
        { name: 'Cat', subMenus: ['HomeLiving', 'Movement', 'Toy', 'Accessories'] }
    ];

    const handleLogoOnClick = () => {
        navigate("")
    }

    const handleLogoutOnClick = () => {
        localStorage.removeItem("accessToken");
        Swal.fire({
            title: "로그아웃 성공",
            text: "로그아웃 되었습니다."
        }).then((result) => {
            if(result.isConfirmed) {
                window.location.replace("/")
            }
        })
    }

    const handleGoToCartOnClick = () => {
        navigate(`/product/cart/${principal?.data?.data?.userId}`)
    }

    const handleSubMenuMouseEnter = (menu) => {
        setSelectedMenu(menu);
        setIsSubMenu(true);
    };

    const handleSubMenuMouseLeave = () => {
        setIsSubMenu(false);
    };

    const handleMenuClick = (menuName) => {
        const pathMap = {
            Dog: '/products/dog',
            Cat: '/products/cat',
            CustomerService: '/notice'
        }

        const path = pathMap[menuName];
            window.location.replace(path);
    }

    const handleSubMenuClick = (menuName, subMenu) => {
        const pathMap = {
            Dog: {
                HomeLiving: '/products/dog/home-living',
                Movement: '/products/dog/movement',
                Fashion: '/products/dog/fashion',
                Toy: '/products/dog/toy',
                Walk: '/products/dog/walk',
            },
            Cat: {
                HomeLiving: '/products/cat/home-living',
                Movement: '/products/cat/movement',
                Toy: '/products/cat/toy',
                Accessories: '/products/cat/fashion',
            },
            CustomerService: {
                Notice: '/notice',
            },
        };
        
            const path = pathMap[menuName]?.[subMenu];
            window.location.replace(path)
        };
    
    return (
        <div css={S.SLayout}>
            <div css={S.STopContainer}>
                <div css={S.SLogo}>
                    <img src={logo} onClick={handleLogoOnClick}/>
                </div>
                <ul css={S.SMenuBox}>
                    {menus?.map((menu, index) => (
                            <li key={index} css={S.SFullMenuBox}
                                onClick={() => handleMenuClick(menu.name)}
                                onMouseEnter={(e) => {handleSubMenuMouseEnter(menu)}} 
                                onMouseLeave={handleSubMenuMouseLeave}>
                                <h3>{menu.name}</h3>
                            </li>
                    ))}
                    <ul css={() => S.SSubMenuBox(isSubMenu && !!selectedMenu)}
                        onMouseEnter={(e) => {setIsSubMenu(true)}} 
                        onMouseLeave={handleSubMenuMouseLeave}>
                        {selectedMenu?.subMenus?.map((subMenu, subIndex) => (
                            <li key={subIndex}>
                                <h3 onClick={() => handleSubMenuClick(selectedMenu.name, subMenu)}>{subMenu}</h3>
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
            <div css={S.SUserRelatedBox}>
                    {!!principal.data 
                        ? (
                            <>
                                <Link>
                                    <h3 onClick={handleLogoutOnClick}>LOGOUT</h3>
                                </Link>
                                {principal.data.data.roleName === "ROLE_ADMIN"
                                    ? (
                                        <Link to={`/admin/users`}>
                                            <h3>ADMIN PAGE</h3>
                                        </Link>
                                    )
                                    : (
                                        <>
                                            <Link to={`/orders`}>
                                                <h3>MY PAGE</h3> 
                                            </Link>
                                            <div css={S.SCartIcon} onClick={handleGoToCartOnClick}>
                                                <TbShoppingBag />
                                            </div>
                                        </>
                                    )
                                }
                            </>
                        )
                        : (
                            <>
                                <Link to="/auth/signin">
                                    <h3>LOGIN</h3>
                                </Link>
                                <Link to={`/orders`}>
                                    <h3>MY PAGE</h3> 
                                </Link>
                                <div css={S.SCartIcon} onClick={handleGoToCartOnClick}>
                                    <TbShoppingBag />
                                </div>
                            </>
                        )
                    }
                    
                </div>

        </div>
    );
}

export default Header;
