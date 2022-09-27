import Header from './Header';
import ListTile from './ListTile';
import Portfolio from './Portfolio';
import Contact from './Contact';
import skills from './skills';
import toLearn from './toLearn';
import { Container } from './styled';
import ThemeToggler from './ThemeToggler';

const App = () => {

  return (
    <Container>
      <ThemeToggler />
      <Header />
      <ListTile title="My skillset includes" items={skills} />
      <ListTile title="What I want to learn next" items={toLearn} />
      <Portfolio />
      <Contact />
    </Container>
  );
};

export default App;
