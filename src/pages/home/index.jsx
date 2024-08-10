import { Container } from "./style";
import { Header } from "../../components/header";

import altJ from '../../assets/alt-j.png';
import arcticMonkeys from '../../assets/arcticMonkeys.png';
import gomes from '../../assets/gomes.png';
import adelle from '../../assets/adelle.png';
import pompeo from '../../assets/pompeo.png';
import matue from '../../assets/matue.png';
import carlos from '../../assets/luccasCarlos.png'
import travis from '../../assets/travis.png'
import marilia from '../../assets/marilia.png'
import kanye from '../../assets/kanye.png'
import luan from '../../assets/luan.png'
import puma from '../../assets/puma.png'
import major from '../../assets/major-rd.png'


export function Home(){
  return (
    <Container>
      <Header />
      
      <div className="container">
      <h2 className="titleHighlights">
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

      <h2 className="pl">
        Playlists
      </h2>

      <section>
        
        <div className="playlists">
          <img src={travis} alt="" />
          <h3>Travis Scott</h3>
          <p>This is Travis Scott</p>
        </div>

        <div className="playlists">
          <img src={marilia} alt="" />
          <h3>Marilia Mendonça</h3>
          <p>This is Marilia Mendonça</p>
        </div>

        <div className="playlists">
          <img src={major} alt="" />
          <h3>Major RD</h3>
          <p>This is Major RD</p>
        </div>

        <div className="playlists">
          <img src={kanye} alt="" />
          <h3>Kanye West</h3>
          <p>This is Kanye West</p>
        </div>

        <div className="playlists">
          <img src={luan} alt="" />
          <h3>Luan Santana</h3>
          <p>This is Luan Santana</p>
        </div>

        <div className="playlists">
          <img src={puma} alt="" />
          <h3>Puma PJL</h3>
          <p>This is Puma PJL</p>
        </div>
       
      </section>
      </div>
    <footer>
      <span>Developed by <strong>Marco Pereira</strong></span>
    </footer>
    </Container>
  )
}