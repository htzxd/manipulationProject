import { Container, Main } from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Cards } from "../../components/cards";
import { CardsAside } from "../../components/cardsAside";
import { CardsPL } from "../../components/cardsPL";
import { TitleHighlights } from "../../components/titleHighlights";

export function Home(){
  return (
    <Container>
      <Header />
      
        <Main>
          <TitleHighlights/> 
          <article>
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
          </article>

          <aside>
            <h2 id="any">Varied genres</h2>

            <CardsAside/>
            <CardsAside/>
            <CardsAside/>
            <CardsAside/>
            <CardsAside/>
              
          </aside>

          <h2 className="pl">
            Playlists
          </h2>

          <section>
            
            <CardsPL/>
            <CardsPL/>
            <CardsPL/>
            <CardsPL/>
            <CardsPL/>
            <CardsPL/>

          </section>
        </Main>
      <Footer/>
    </Container>
  )
}