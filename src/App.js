import { Container } from './styled';
import Header from './Header';
import ListTile from './ListTile';
import Portfolio from './Portfolio';
import Contact from './Contact';
import skills from './skills';
import toLearn from './toLearn';

function App() {
  return (
    <Container>
      <Header />
      <ListTile title="My skillset includes" items={skills} />
      <ListTile title="What I want to learn next" items={toLearn} />
      <Portfolio />
      <Contact />
    </Container>
  );
};

export default App;
