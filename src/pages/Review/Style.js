import { css } from "@emotion/react";

export const SPText = css`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
`;

export const SLayout = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SModalContainer = css`
    width:15.1vw;
    min-width: 200px;
    padding: 15px;
    height: 520px;
    border-radius: 10%;
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    background-color: #fff;
    border-radius: 20px;
    margin: 20px;
`;

export const SModalHeader = css`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
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
    border: 1px solid #dbdbdb;
    border-bottom: none;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-image: url(https://stylist-nagatomo.com/wp-content/uploads/2022/09/noimage-760x460.png);
    background-position: center;
    background-size: cover;
    margin: -25px 0;
    border-radius: 10% 10% 0 0;

    & > img {
        height: 100%;
    }
`;

export const SModalBody = css`
    & > input[type="file"] {
        display: none;
    }

    & > textarea {
        width: 100%;
        height: 100px;
    }
`;

export const SModalSubmitButton = css`
    cursor: pointer;
    margin-left: auto;
`;

export const SText = css`
    padding: 5px 10px;
    width: 90vw;
    margin-top: 25px;
    border-radius: 0 0 20px 20px;
    resize: none;

    &:disabled {
        background-color: #fff;
    }
`;

export const SButton = css`
    width: 13.2vw;
    height: 30px;
    margin-left: 3px;
    margin-top: 10px;
`;
