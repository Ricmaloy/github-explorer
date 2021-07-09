import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;

    position: relative;

    @media(max-width: 980px) {
        width: 70%;
    }

    @media(max-width: 650px) {
        width: 80%;
    }
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 48px;

    margin-bottom: 55px;

    @media(max-width: 650px) {
        font-size: 30px;
    }
`;

export const SearchContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: 5px;

    box-shadow: 0px 1px 5px rgba(0,0,0, 0.1);

    input {
        width: 270px;
        font-size: 16px;
        height: 45px;
        padding-left: 15px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        font-family: 'Roboto', sans-serif;

        @media(max-width: 650px) {
            width: 150px;
            font-size: 13px;
        }
    }

    button {
        height: 45px;
        font-size: 15px;
        padding: 0px 60px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        color: var(--white);
        background: var(--green);

        @media(max-width: 650px) {
            padding: 0px 40px;
            font-size: 13px;
        }
    }
`;

export const GitImage = styled.img`
    position: absolute;
    right: -175px;
    top: 0px;

    z-index: -1;

    @media(max-width: 980px) {
        transform: scale(.8);
        top: -67px;
    }

    @media(max-width: 720px) {
        transform: scale(.6);
        top: -130px;
    }
`;
