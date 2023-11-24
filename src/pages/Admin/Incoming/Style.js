import { css } from "@emotion/react";

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 95%;

    & > h2 {
        text-align: end;
        font-size: 20px;
    }

    & > table {
        width: 100%;
    }
`;

export const SSelectBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > select {
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
    }

    & > input { 
        margin: 5px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5.25px;
    }

    & > button {
        margin: 5px 1px 5px 5px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        width: 50px;
        cursor: pointer;
    }
`;

export const SThBox = css`
    & > th {
        border: 1px solid black;
        padding: 5px 5px;
        border-radius: 5px;
        background-color: darkgray;
        font-size: 15px;
        font-weight: 700;
    }
`;

export const STdBox = css`
    & > td {
        border-bottom: 1px dashed black;
        padding: 5px 5px;
        font-size: 15px;
        text-align: center;
        
    }
`;

export const SImg = css`
    width: 125px;
`;

export const SSelectButton = css`
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    width: 65px;
    
    color: black;
    background-color: #efefef;
    cursor: pointer;

    :hover {
        transition: 0.3s ease;
        background-color: #fafafa;
    }
`;

export const SEditButton = css`
    border: none;
    border-radius: 10px;
    padding: 5px;
    width: 65px;
    
    color: white;
    background-color: #0064ff;
    cursor: pointer;
`;

export const SDeleteButton = css`
    border: 1px solid red;
    border-radius: 10px;
    padding: 5px;
    width: 65px;
    
    color: red;
    cursor: pointer;

    :hover {
        transition: 0.3s ease;
        background-color: #fafafa;
    }
`;

export const SPageButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;