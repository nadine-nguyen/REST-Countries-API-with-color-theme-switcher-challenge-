import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import CountryInfo from './containers/CountryInfo';

// styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import ThemeController from './components/ThemeController';
import GlobalStyle from './styles/GlobalStyle';
import { Header, HeaderContainer } from './styles/Header';
import Container from './styles/Container';

export default function App() {
  const [theme, setTheme] = React.useState(darkTheme);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <HeaderContainer>
          <Container as={Header}>
            <h1>Where in the world?</h1>
            <ThemeController onChange={handleThemeChange} />
          </Container>
        </HeaderContainer>

        <Switch>
          <Route path="/:id">
            <CountryInfo />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
