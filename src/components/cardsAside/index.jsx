import { Container } from "./style"

export function CardsAside({ imageURL, artist, music}){
  return(
    <Container>
      <img src={imageURL} alt="profile photo artist" />
      <div className="textCardArt">
        <h3>{artist}</h3>
        <p>{music}</p>
      </div>
    </Container>
  )
}