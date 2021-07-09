import styled, { keyframes } from 'styled-components';

export const shimmer = keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: -135% 0%;
    }
`;

interface ShimmerContainerProps {
    ShimmerContainerwidth?: string;
    ShimmerContainerheight?: string;
    color?: string;
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    marginLeft?: string;
}

interface ShimmerLineProps {
    ShimmerLinewidth?: string;
    ShimmerLineheight?: string;
    color?: string;
}

export const Container = styled.div<ShimmerContainerProps>`
    width: ${props => props.ShimmerContainerwidth};
    height: ${props => props.ShimmerContainerheight};

    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};

    margin-bottom: 15px;
    margin-right: 25px;
    margin-left: ${props => props.marginLeft};

    background-color: ${props => props.color};
    background-size: 400% 400%;

    border-radius: 5px;
`;

export const Circle = styled.span`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    margin-right: 20px;

    background-image: linear-gradient(-90deg, #cccccc 0%, #bababa 50%, #cccccc 100%);
    background-size: 400% 400%;

    animation: ${shimmer} 1.5s ease-in-out infinite;
    `;

export const Line = styled.span<ShimmerLineProps>`
    display: block;
    width: ${props => props.ShimmerLinewidth};
    height: ${props => props.ShimmerLineheight}px;

    margin-top: 8px;

    background-image: linear-gradient(-90deg, #cccccc 0%, #bababa 50%, #cccccc 100%);
    background-size: 400% 400%;

    animation: ${shimmer} 1.2s ease-in-out infinite;
`;