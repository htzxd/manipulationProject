import { Container } from "./style";
import { Link } from "react-router-dom";

export function Header(){
  return (
    <Container>
      <header>
        <h1>Spotify Recommended Songs</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Road</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </header>
    </Container>
  )
}