import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;

    position: relative;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 48px;

    margin-bottom: 55px;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;

    input {
        font-size: 18px;
        height: 45px;
        padding-left: 15px;

        font-family: 'Roboto', sans-serif;
    }

    button {
        height: 45px;
        font-size: 15px;
        padding: 0px 60px;

        color: var(--white);
        background: var(--green);
    }
`;

export const GitImage = styled.img`
    position: absolute;
    right: -175px;
    top: 0px;

    z-index: -1;
`;
