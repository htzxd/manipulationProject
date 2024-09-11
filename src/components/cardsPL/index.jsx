import { Container } from "./style";
import travis from "../../assets/travis.png"

export function CardsPL({ imageURL, artist, playlist}){
  return(
    <Container>
      <img src={imageURL} alt="" />
      <h3>{artist}</h3>
      <p>{playlist}</p>
    </Container>
  )
}