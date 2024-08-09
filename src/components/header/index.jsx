import { Container } from "./style";

export function Header(){
  return (
    <Container>
      <header>
        <h1>Spotify recommended songs</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Road</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </header>
    </Container>
  )
}