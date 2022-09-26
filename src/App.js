import { Container } from './styled';
import Header from './Header';
import ListTile from './ListTile';
import Portfolio from './Portfolio';

function App() {
  return (
    <Container>
      <Header />
      <ListTile title="My skillset includes" items="" />
      <ListTile title="What I want to learn next" items="" />
      <Portfolio />
    </Container>
  );
};

export default App;
