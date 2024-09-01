import styled from "styled-components";

export const Container = styled.div`
  
`

export const Primary = styled.div`
  display: grid;
  grid-template-areas: 
  "A A B";
  margin-block:1.2rem;
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
    max-height: 25rem;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const Aside = styled.div`
  grid-area: B;
  place-content: center;
  margin-inline: 2.4rem;

  p {
    color: ${({ theme }) => theme.colors.text_primary};
  }
`