import { css } from "@emotion/react";

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px auto;
    width: 95%;
`;

export const STopTitle = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    margin-bottom: 25px;
    width: 100%;
    
    & > h2 {
        font-size: 20px;
    }
`;

export const SSelectBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-bottom: 5px;
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
        margin-right: 20px;
        padding: 5px;
        width: 75px;
    }
`;

export const STableBox = css`
    display: flex;
    align-items: start;
    justify-content: center;

    width: 100%;
`;

export const STable = css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 5px;
`;

export const SThBox = css`
    & > th {
        border-radius: 10px;
        padding: 5px;
        text-align: center;
        background-color: #dbdbdb;
    }

`;

export const STdBox = css`
    & > td {
        padding: 5px;
        border-bottom: 2px solid #dbdbdb;
        border-right: 2px solid #dbdbdb;
        border-radius: 10px;
        text-align: center;
        background-color: #f1f1f1;
    }
`;

export const SSettingBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > select {
        border-radius: 5px;
        padding: 5px;
        width: 100px;
        height: 28.5px;
    }

    & > button {
        margin-top: 10px;
        padding: 5px;
        width: 100px;

        background-color: #333;
        color: #f9fbff;

        :hover {
            color: #f9fbff;
            background-color: #2b64fb;
        }
    }
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