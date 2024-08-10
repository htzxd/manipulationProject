import { Container } from "./style";
import { Header } from "../../components/header";
import altJ from '../../assets/alt-j.png';
import arcticMonkeys from '../../assets/arcticMonkeys.png';
import gomes from '../../assets/gomes.png'


export function Home(){
  return (
    <Container>
      <Header />
      <div className="container">
      <article>
        <h2>
         Highlights of the Week
        </h2>

        <div className="mainCard">
          <div className="cards">
            <img src={altJ} alt="" />
            <div className="textCardArt">
              <p>#1 music</p>
              <h2>BreezeBlocks - J-Cloud</h2>
            </div>  
          </div>
          
          <div className="cards">
            <img src={arcticMonkeys} alt="" />
            <div className="textCardArt">
              <p>#2 music</p>
              <h2>Do i wanna know ?</h2>
            </div>
          </div>
          
          <div className="cards">
            <img src={arcticMonkeys} alt="" />
            <div className="textCardArt">
              <p>#3 music</p>
              <h2>Wanna be yours</h2>
            </div>
          </div>
        </div>
      </article>

      <aside>
        <h2>Varied genres</h2>

        <div className="cardsAside">
          <img src={gomes} alt="photo brazilian singer" />
          <h3>Joao Gomes</h3>
          <p>Vaquejada</p>
        </div>
      </aside>
      </div>
    </Container>
  )
}