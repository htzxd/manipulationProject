import { Container, Main } from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Cards } from "../../components/cards";
import { CardsAside } from "../../components/cardsAside";
import { CardsPL } from "../../components/cardsPL";
import { TitleHighlights } from "../../components/titleHighlights";

import altJ from "../../assets/alt-j.png";
import puma from "../../assets/puma.png";
import john from "../../assets/john.jpeg";
import travis from "../../assets/travis.png";
import arcticMonkeys from "../../assets/arcticMonkeys.png";
import adelle from "../../assets/adelle.png";
import luccasCarlos from "../../assets/luccasCarlos.png";
import gomes from "../../assets/gomes.png";
import marilia from "../../assets/marilia.png";
import pompeo from "../../assets/pompeo.png";
import kanye from "../../assets/kanye.png";


export function Home(){
  return (
    <Container>
      <Header />  
        <Main>
          <TitleHighlights/> 
          <article>
              
              <Cards
              title="Alt-J - BreezeBlocks"
              imageURL={altJ}
              paragraph="#1 - Musics"
              />
              <Cards
              title="PumaPJL - Cega eles vovó"
              imageURL={puma}
              paragraph="#2 - Musics"
              />
              <Cards
              title="John Lennon - Imagine"
              imageURL={john}
              paragraph="#3 - Musics"
              />
              <Cards
              title="Travis Scott - Goosebumps"
              imageURL={travis}
              paragraph="#4 - Musics"
              />
              <Cards
              title="ArcticMonkeys - R U mine ?"
              imageURL={arcticMonkeys}
              paragraph="#5 - Musics"
              />
              
          </article>

          <aside>
            <h2 id="any">Varied genres</h2>

            <CardsAside
            imageURL={puma}
            artist="PumaPJL"
            music="Ai calica"
            />

            <CardsAside
            imageURL={john}
            artist="John Lennon"
            music="Imagine"
            />

            <CardsAside
            imageURL={adelle}
            artist="Adelle"
            music="Someone Like you"
            />

            <CardsAside
            imageURL={luccasCarlos}
            artist="Luccas Carlos"
            music="VC N AMA NGM"
            />

            <CardsAside
            imageURL={gomes}
            artist="João Gomes"
            music="Meu pedaço de pecado"
            />
              
          </aside>

          <h2 className="pl">
            Playlists
          </h2>

          <section>
            
            <CardsPL
            imageURL={travis}
            artist="Travis Scoot"
            playlist="This is Travis Scoot"
            />

            <CardsPL
            imageURL={altJ}
            artist="Alt-J"
            playlist="This is Alt-J"
            />

            <CardsPL
            imageURL={arcticMonkeys}
            artist="Arctic Monkeys"
            playlist="This is Arctic Monkeys"
            />

            <CardsPL
            imageURL={marilia}
            artist="Marilia Mendonça"
            playlist="This is Marilia Mendonça"
            />

            <CardsPL
            imageURL={pompeo}
            artist="Isadora Pompeo"
            playlist="This is Isadora Pompeo"
            />

            <CardsPL
            imageURL={kanye}
            artist="Kanye West"
            playlist="This is Kanye West"
            />


          </section>
        </Main>
      <Footer/>
    </Container>
  )
}