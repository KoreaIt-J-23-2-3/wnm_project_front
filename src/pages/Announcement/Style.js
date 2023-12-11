import { css } from '@emotion/react';

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

export const STopTitle = css`
    & > h2 {
        margin: 25px auto;
        font-size: 35px;
    }
`;

export const STableBox = css`
    display: flex;
    align-items: start;
    justify-content: center;

    margin-bottom: 25px;
    width: 80%;
`;

export const STable = css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 5px;
`;

export const SThBox = css`
    & > th {
        border-radius: 10px;
        padding: 10px;
        height: 42px;
        text-align: center;
        background-color: #dbdbdb;
        

        :nth-of-type(1) {
            width: 20%;
        }
        :nth-of-type(2) {
            width: 60%;
        }
        :nth-of-type(3) {
            width: 20%;
        }
    }
`;

export const STdBox = css`
    & > td {
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        background-color: #f1f1f1;
        cursor: pointer;
    }
`;
