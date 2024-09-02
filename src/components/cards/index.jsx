import { Container } from "./style";
import altJ from '../../assets/alt-j.png';

export function Cards(){
  return(
    <Container>
      <img src={altJ} alt="" />
      <div className="textCardArt">
        <p>#1 music</p>
        <h2>BreezeBlocks - J-Cloud</h2>
      </div> 
    </Container>
  )
}