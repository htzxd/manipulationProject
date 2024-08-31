import { Container, Main, Aside } from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import john from '../../assets/john.jpeg';

export function Profile(){
  return(
    <Container>
      
        <Header/>
        
          <Main>
            <img src={john} alt="author portrait" />
            <h2>John Lennon</h2>
          </Main>

          <Aside>
            <p>pilota o porsche, noovo pigente gerente ja mandou gang gang pilota o porsche gang gang gang ie ie 
              te vi na rua e atirei skrrrrrr skrrrrrrrr yeye <span>monstrum in fronte, monstrum in animo </span>
            </p>
          </Aside>
      
      <Footer/>
    </Container>
  )
}