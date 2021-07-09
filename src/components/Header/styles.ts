import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px 0;
    margin-bottom: 50px;

    img {
        width: 155px;
    }


    button {
        color: var(--gray);

        background: none;

        display: flex;
        align-items: center;

        svg {
            width: 20px;
        }
    }

    @media(max-width: 650px) {
        margin-bottom: 10px;
    }
`;