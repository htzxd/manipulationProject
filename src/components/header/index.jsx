import { Container } from "./style";

export function Header(){
  return (
    <Container>
      <header>
        <h1>Spotify recommended songs</h1>
        <ul>
          <li>Home</li>
          <li>Road</li>
          <li>About</li>
        </ul>
      </header>
    </Container>
  )
}