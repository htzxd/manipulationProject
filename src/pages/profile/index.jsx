import { Container, Main, Aside, Primary } from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import john from '../../assets/john.jpeg';
import { Link } from "react-router-dom";

export function Profile(){
  return(
    <Container>
      
        <Header/>
          <Primary>
            <Main>
              <img src={john} alt="author portrait" />
              <Link>John Lennon</Link>
            </Main>

            <Aside>
              <p>pilota o porsche, noovo pigente gerente ja mandou gang gang pilota o porsche gang gang gang ie ie 
                te vi na rua e atirei skrrrrrr skrrrrrrrr yeye <span>monstrum in fronte, monstrum in animo </span>
              </p>
            </Aside>
          </Primary>
      <Footer/>
    </Container>
  )
}