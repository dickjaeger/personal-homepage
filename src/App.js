import GlobalStyle, { Container } from './styled';
import useDarkMode from './useDarkMode';
import Theme from './Theme';
import ThemeToggler from './ThemeToggler';
import Header from './Header';
import ListTile from './ListTile';
import Portfolio from './Portfolio';
import Contact from './Contact';
import skills from './skills';
import toLearn from './toLearn';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Theme dark={darkMode}>
      <GlobalStyle />
      <Container>
        <ThemeToggler
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Header />
        <ListTile title="My skillset includes" items={skills} />
        <ListTile title="What I want to learn next 🚀" items={toLearn} />
        <Portfolio />
        <Contact />
      </Container>
    </Theme>
  );
};

export default App;
