import { css } from "@emotion/react";

export const SModalContainer = css`
    background-color: #ffffff;
    width: 30vw;
    min-width: 300px;
    padding: 15px;
`;

export const SModalHeader = css`
    display: flex;
    align-items: center;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;

`;

export const SModalHeaderImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: 100px;
    height: 100px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const SReviewImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    overflow: hidden;
    background-image: url(https://stylist-nagatomo.com/wp-content/uploads/2022/09/noimage-760x460.png);
    background-position: center;
    background-size: cover;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
    & > img {
        width: 100%;
    }
`;

export const SModalBody = css`
    & > input[type="file"] {
        display: none;
    }

    & > textarea {
        width: 100%;
        height: 100px;
        resize: none;
    }
`;

export const SModalSubmitButton = css`
    cursor: pointer;
    margin-left: auto;
`;