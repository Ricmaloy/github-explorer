import styled from "styled-components";

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

export const UserProfile = styled.div`
    display: flex;
    align-items: center;

    gap: 20px;

    h1 {
        margin-bottom: 10px;

        @media(max-width: 650px) {
            font-size: 20px;
        }
    }
`;

export const UserImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    @media(max-width: 650px) {
        width: 80px;
        height: 80px;
    }
    
`;

export const RepoProfile = styled.div`
    display: flex;
    gap: 10px;

    margin-top: 30px;

    div h2 {
        @media(max-width: 650px) {
            font-size: 20px;
        }
    }

    div span {
        @media(max-width: 650px) {
            font-size: 12px;
        }
    }
`;

export const RepoList = styled.ul`
    margin-top: 80px;
    list-style: none;

    @media(max-width: 650px) {
        margin-top: 50px;
    }
`;

export const RepoListItem = styled.li`
    width: 100%;
    height: 90px;
    background: var(--white);
    border-radius: 5px;

    padding: 0 26px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: all .4s;

    filter: brightness(0.98);

    div h3 {
        @media(max-width: 650px) {
            font-size: 14px;
        }
    }

    div span {
        font-size: 14px;
        margin-left: 6px;

        @media(max-width: 650px) {
            font-size: 12px;
        }
    }

    a svg {
        font-size: 28px;
        color: var(--black);

        @media(max-width: 650px) {
            font-size: 20px;
        }
    }

    & + li {
        margin-top: 16px;
    }

    &:hover {
        transform: translateX(15px);
        filter: brightness(1);

        cursor: pointer;
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

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    padding: 20px 40px;

    img {
        width: 260px;

        @media(max-width: 720px) {
            width: 200px;
        }
    }

    p {
        color: #3A3A3A;
        font-weight: bold;

        @media(max-width: 720px) {
            font-size: 14px;
        }
    }

    button {
        padding: 15px 25px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;

        margin-top: 25px;
        border-radius: 55px;
        border: 1px solid #3A3A3A;

        transition: filter .2s;

        &:hover {
            filter: brightness(.9);
        }

        @media(max-width: 720px) {
            padding: 10px 20px;
            font-size: 12px;
            margin-top: 15px;
        }
    }
`;