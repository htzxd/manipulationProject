import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home';

export function App(){
  return(
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
         <Home />
      </ThemeProvider>
    </div>
  )
}