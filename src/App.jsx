import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { Profile } from './pages/profile';

export function App(){
  return(
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
         <Profile />
      </ThemeProvider>
    </div>
  )
}