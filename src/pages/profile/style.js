import styled from "styled-components";

export const Container = styled.div`
  p {
    cursor: default;
    max-width: 700px;
  }
`

export const Primary = styled.div`
  display: grid;
  grid-template-areas: 
  "A B C";
  gap: 1.8rem;
  margin-block:1.2rem;

  @media (max-width: 728px){
    display: flex;
    flex-direction: column;
  }
`

export const Main = styled.div`
  color: ${({ theme }) => theme.colors.text_primary};
  margin-top: 1.2rem;
  grid-area: A;

  text-align: center;

  a {
    display: block;

    margin-top: 1.2rem;
    font-size: 2.4rem;
    font-family: 'Roboto Mono', sans-serif;
  }

  img {
    max-height: 15rem;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const Section = styled.div`
  background: ${({ theme }) => theme.colors.bg_secondary};
  color: ${({ theme }) => theme.colors.text_primary};
  border-radius: .8rem;

  place-content: center;

  font-size: 1.8rem;
  grid-area: B;
  

  @media (max-width: 1050px){
    font-size: 1.4rem;
  }

  @media (max-width: 728px){
    padding: 1.2rem;
  }

  @media (max-width: 550px){
    font-size: 1.2rem;
  }
`

export const Aside = styled.div`
  background: ${({ theme }) => theme.colors.bg_secondary};
  color: ${({ theme }) => theme.colors.text_primary};
  border-radius: .8rem;

  grid-area: C;
`