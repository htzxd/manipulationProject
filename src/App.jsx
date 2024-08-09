import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import sapo from './assets/img01.png'

export function App(){
  return(
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <header>
            <h1>My name is Eminem</h1>
            <p>Im developer rapper</p>
            <form id='index'>
              <ul>
                <li>Home</li>
                <li>The road</li>
                <li>Bio</li>
              </ul>
            </form>
          </header>

          <main>
            <img src="https://github.com/jason.png"/>
            <h2>Come Home</h2>
            <p>To be happy with little moments</p>

            <section>
              <h3>Recommended</h3>
              <p>here you know more about the simple things for you entertainment</p>
            </section>
            </main>
            
            <aside>
              <div className="card">
                <img src={sapo} />
                <h3>This is The Weekend</h3>
                <p>Greatest music and renowned artist</p>
              </div>
            </aside>
          
          <footer>
            <p>htzxd - 2024</p>
          </footer>
      </ThemeProvider>
    </div>
  )
}