import { Container, Main } from "./style";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";

import { User } from "@phosphor-icons/react"

export function Login(){
  return(
    <Container>
      <Header/>
      <Main>
        <div className="signIn">
          <h2><User/></h2>

          <input
            name="nickname" 
            placeholder="write your nickname" 
            id="name"
            type="text"
          />
          <input
            name="email" 
            placeholder="write your email" 
            id="email"
            type="text"
          />
          <input
            name="password" 
            placeholder="write your password" 
            id="password"
            type="password"
          />

        </div>
       
      </Main>
      <Footer/>
    </Container>
  )
}