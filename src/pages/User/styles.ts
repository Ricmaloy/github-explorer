import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;

    position: relative;
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;

    gap: 20px;

    h1 {
        margin-bottom: 10px;
    }
`;

export const UserImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const RepoProfile = styled.div`
    display: flex;
    gap: 10px;

    margin-top: 30px;
`;

export const RepoList = styled.ul`
    margin-top: 80px;
    list-style: none;
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

    div span {
        font-size: 14px;
        margin-left: 6px;
    }

    a svg {
        font-size: 28px;
        color: var(--black);
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
`;