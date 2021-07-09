import { Container, Line, Circle } from './styles';

export const Shimmer = () => {
    return (
        <>
        <Container>
            <Circle />
            <Container justifyContent="center" flexDirection="column" >
                <Line ShimmerLineheight="20" ShimmerLinewidth="150px" color="#b3b3b3" />
                <Line ShimmerLineheight="20" ShimmerLinewidth="130px" color="#b3b3b3" />
            </Container>
        </Container>
        <Container>
            <Container flexDirection="column" >
                <Line  ShimmerLineheight="15" ShimmerLinewidth="35px" color="#b3b3b3" />
                <Line  ShimmerLineheight="15" ShimmerLinewidth="65px" color="#b3b3b3" />
            </Container>
            <Container flexDirection="column" >
                <Line  ShimmerLineheight="15" ShimmerLinewidth="35px" color="#b3b3b3" />
                <Line  ShimmerLineheight="15" ShimmerLinewidth="65px" color="#b3b3b3" />
            </Container>
            <Container flexDirection="column" >
                <Line  ShimmerLineheight="15" ShimmerLinewidth="35px" color="#b3b3b3" />
                <Line  ShimmerLineheight="15" ShimmerLinewidth="65px" color="#b3b3b3" />
            </Container>
        </Container>
        <Container ShimmerContainerwidth="100%"  ShimmerContainerheight="90px" color="#fcfcfc" >
            <Container flexDirection="column" justifyContent="center" marginLeft="20px" >
                <Line  ShimmerLineheight="15" ShimmerLinewidth="185px" color="#b3b3b3" />
                <Line  ShimmerLineheight="15" ShimmerLinewidth="285px" color="#b3b3b3" />
            </Container>
        </Container>
        <Container ShimmerContainerwidth="100%"  ShimmerContainerheight="90px" color="#fcfcfc" >
            <Container flexDirection="column" justifyContent="center" marginLeft="20px" >
                <Line  ShimmerLineheight="15" ShimmerLinewidth="185px" color="#b3b3b3" />
                <Line  ShimmerLineheight="15" ShimmerLinewidth="285px" color="#b3b3b3" />
            </Container>
        </Container>
        <Container ShimmerContainerwidth="100%"  ShimmerContainerheight="90px" color="#fcfcfc" >
            <Container flexDirection="column" justifyContent="center" marginLeft="20px" >
                <Line  ShimmerLineheight="15" ShimmerLinewidth="185px" color="#b3b3b3" />
                <Line  ShimmerLineheight="15" ShimmerLinewidth="285px" color="#b3b3b3" />
            </Container>
        </Container>
        </>
    )
}