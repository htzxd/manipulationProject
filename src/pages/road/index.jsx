import { Container, Main } from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Road(){
  return(
    <Container>
      <Header/>
      <Main>
        <p>hello world</p>
      </Main>
      <Footer/>
    </Container>
  )
}