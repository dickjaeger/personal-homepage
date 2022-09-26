import { Container } from './styled';
import Header from './Header';
import ListTile from './ListTile';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <Container>
      <Header />
      <ListTile title="My skillset includes" items="" />
      <ListTile title="What I want to learn next" items="" />
      <Portfolio />
      <Contact />
    </Container>
  );
};

export default App;
