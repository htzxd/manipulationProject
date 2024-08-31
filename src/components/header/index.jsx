import { Container } from "./style";
import { Link } from "react-router-dom";

export function Header(){
  return (
    <Container>
      <header>
        <h1>Spotify Recommended Songs</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/road">Road</Link></li>
          <li><Link to="/profile">About</Link></li>
        </ul>
      </header>
    </Container>
  )
}