import { Container } from "./style";
import { Header } from "../../components/header";
import altJ from '../../assets/alt-j.png';
import arcticMonkeys from '../../assets/arcticMonkeys.png';
import gomes from '../../assets/gomes.png';
import adelle from '../../assets/adelle.png';
import pompeo from '../../assets/pompeo.png';
import matue from '../../assets/matue.png';
import carlos from '../../assets/luccasCarlos.png'


export function Home(){
  return (
    <Container>
      <Header />
      
      <div className="container">
      <h2 id="titleHighlights">
         Highlights of the Week
        </h2> 
      <article>
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
              <h2>Do i wanna know ? - ArcticMonkeys</h2>
            </div>
          </div>
          
          <div className="cards">
            <img src={arcticMonkeys} alt="" />
            <div className="textCardArt">
              <p>#3 music</p>
              <h2>Wanna be yours - ArcticMonkeys</h2>
            </div>
          </div>
          
          <div className="cards">
            <img src={arcticMonkeys} alt="" />
            <div className="textCardArt">
              <p>#4 music</p>
              <h2>Wanna be yours - ArcticMonkeys</h2>
            </div>
          </div>
          
          <div className="cards">
            <img src={arcticMonkeys} alt="" />
            <div className="textCardArt">
              <p>#5 music</p>
              <h2>Wanna be yours - ArcticMonkeys</h2>
            </div>
          </div>
        </div>
      </article>

      <aside>
        <h2>Varied genres</h2>

        <div className="cardsAside">
          <img src={gomes} alt="photo brazilian singer" />
          <div className="textCardArt">
            <h3>Joao Gomes</h3>
            <p>Vaquejada</p>
          </div>
        </div>
        
        <div className="cardsAside">
          <img src={pompeo} alt="photo brazilian singer" />
          <div className="textCardArt">
            <h3>Isadora Pompeo</h3>
            <p>De dentro pra fora</p>
          </div>
        </div>
        
        <div className="cardsAside">
          <img src={matue} alt="photo brazilian singer" />
          <div className="textCardArt">
            <h3>Matuê</h3>
            <p>A morte do auto-tune</p>
          </div>
        </div>
        
        <div className="cardsAside">
          <img src={adelle} alt="photo brazilian singer" />
          <div className="textCardArt">
            <h3>Adelle</h3>
            <p>I can't love you in the dark</p>
          </div>
        </div>
        
        <div className="cardsAside">
          <img src={carlos} alt="photo brazilian singer" />
          <div className="textCardArt">
            <h3>Luccas Carlos</h3>
            <p>Sem ninguém</p>
          </div>
        </div>
      </aside>
      </div>
    </Container>
  )
}