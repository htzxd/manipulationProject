import { Container } from "./style";

export function Cards({ imageURL, paragraph, title }){
  return(
    <Container>
      <img src={imageURL} alt="" />
      <div className="textCardArt">
        <p>{paragraph}</p>
        <h2>{title}</h2>
      </div> 
    </Container>
  )
}