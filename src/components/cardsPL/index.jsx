import { Container } from "./style";
import travis from "../../assets/travis.png"

export function CardsPL(){
  return(
    <Container>
      <img src={travis} alt="" />
      <h3>Travis Scott</h3>
      <p>This is Travis Scott</p>
    </Container>
  )
}