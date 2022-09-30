import { AnimatedLoading, Container, LoadingText } from "./styled";

const Loading = () => (
    <Container>
        <LoadingText>Please wait, projects are being loaded...</LoadingText>
        <AnimatedLoading />
    </Container>
);

export default Loading;