import { Container } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/spotify-icon.png"

export function Header(){
  return (
    <Container>
      <header>
        <div className="logo">
         <Link to="/"><img src={logo} alt="" /></Link>
          <h1>Spotify Recommended Songs</h1>
        </div>
        <ul>
          <li><Link to="/profile">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>
    </Container>
  )
}