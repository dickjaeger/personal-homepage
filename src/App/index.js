import { useSelector } from 'react-redux';
import { selectIsDarkMode } from './common/ThemeToggler/slice';
import GlobalStyle, { Container } from './styled';
import Theme from './Theme';
import ThemeToggler from './common/ThemeToggler';
import HomePage from './features/HomePage';

const App = () => {
  const darkMode = useSelector(selectIsDarkMode);

  return (
    <Theme dark={darkMode}>
      <GlobalStyle />
      <Container>
        <ThemeToggler />
        <HomePage />
      </Container>
    </Theme>
  );
};

export default App;
