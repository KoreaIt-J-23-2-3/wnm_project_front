import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px;
    border-right: 2px solid #dbdbdb;
    border-bottom: 2px solid #dbdbdb;
    border-radius: 20px;
    width: 1400px;
    background-color: #fff;
`;

export const SSubContainer = css`
    display: flex;
    justify-content: flex-end;
    margin: 0px auto;
    width: 100%;
`;

export const SSelectBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    width: 100%;

    & > select {
        margin-right: 10px;
        border-radius: 10px;
        padding: 5px;
        height: 28.5px;
    }

    & > input {
        margin-right: 15px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        height: 28.5px;
    }

    & > button {
        margin-right: 65px;
        padding: 5px;
        width: 75px;
    }
`;

export const SProductContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SProductBox = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-top: 20px;
    width: 330px;

    & > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    & > ul > li {
        margin: 0 20px 0px 20px;
        padding-bottom: 10px;
        width: calc(25% - 50px);
        height: 415px;
        cursor: pointer;
    }

    & > ul > li > img {
        border-radius: 10px;
        width: 300px;
        height: 300px;
        overflow: hidden;
    }

    & h3 {
        padding: 5px;
        width: 300px;
        font-size: 15px;
    }

    & p {
        margin-top: 10px;
        padding: 5px;
        width: 300px;

    }
`;


export const SButtonBox = css`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding-bottom: 20px;
        width: 400px;
`;

export const SPageButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageButton = () => css`
    margin: 5px;
    border: none;
    background-color: white;
`;

export const selectedPageButton = () => css`
    margin: 5px;
    background-color: #f1f1f1;
`;
