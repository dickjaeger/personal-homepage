import GlobalStyle, { Container } from './styled';
import useDarkMode from './useDarkMode';
import Theme from '../Theme';
import ThemeToggler from './common/ThemeToggler';
import Header from './features/HomePage/Header';
import ListTile from './features/HomePage/ListTile';
import Portfolio from './features/HomePage/Portfolio';
import Contact from './features/HomePage/Contact';
import { skills, skillsToLearn } from '../skills';
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
        <ListTile title="What I want to learn next 🚀" items={skillsToLearn} />
        <Portfolio />
        <Contact />
      </Container>
    </Theme>
  );
};

export default App;
