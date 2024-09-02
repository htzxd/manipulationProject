import { Container } from "./style"
import matue from "../../assets/matue.png"

export function CardsAside(){
  return(
    <Container>
      <img src={matue} alt="photo brazilian singer" />
      <div className="textCardArt">
        <h3>Matuê</h3>
        <p>A morte do auto-tune</p>
      </div>
    </Container>
  )
}