import { ReactComponent as GithubIcon } from './Github.svg';
import { ReactComponent as LinkedINIcon } from './LinkedIN.svg';
import { Container, Link } from './styled';

const Links = () => (
    <Container>
        <Link href="https://github.com/wojciech-leksza"><GithubIcon /></Link>
        <Link href="https://www.linkedin.com/in/wojciech-leksza/"><LinkedINIcon /></Link>
    </Container>
);

export default Links;