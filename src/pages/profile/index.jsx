import { Container, Main } from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import john from '../../assets/john.jpeg';

export function Profile(){
  return(
    <Container>
      <div className="container">
        <Header/>
        
          <Main>
            <img src={john} alt="author portrait" />
            <h2>John Lennon</h2>
          </Main>

      </div>
    </Container>
  )
}