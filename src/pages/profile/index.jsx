import { Container, Main, Section, Primary, Aside } from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { CardsAside } from "../../components/cardsAside";

import john from '../../assets/john.jpeg';

export function Profile(){
  return(
    <Container>
        <Header/>
          <Primary>
            <Main>
              <img src={john} alt="author portrait" />
              <h2>John Lennon</h2>
            </Main>

            <Section>
              <p>John Winston Ono Lennon was an English singer, songwriter and musician. 
                He gained worldwide fame as the founder, co-lead vocalist and rhythm guitarist of the Beatles. 
                His work included music, writing, drawings and film.
              </p>
            </Section>

            <Aside>
              <CardsAside
              imageURL={john}
              artist="John Lennon"
              music="This is John Lennon"
              />
            </Aside>
          </Primary>
      <Footer/>
    </Container>
  )
}