import styled from "styled-components";

export const Container = styled.div`
  .titleHighlights:hover, .pl:hover, #any:hover {
    cursor: default;
  }

  article {
    grid-area: A;
  }

  aside{
    grid-area: B;
    margin-top: 1.2rem;
    padding: 1.2rem;
    place-content: center;
    
    h2 {
      text-align: center;
    }
  }
  
  aside, article {
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    color: ${({ theme }) => theme.colors.text_primary};
    border-radius: .8rem;
  }

  .pl {
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: 2.4rem;
    font-style: italic;
    font-weight: 400;

    grid-area: D;
  }

  section {
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    border-radius: .8rem;
    
    display: grid;
    grid-area: E;
    grid-template-columns: repeat(6, 1fr);
  }
`

export const Main = styled.div`
  display: grid;
  grid-template-areas:
  "C C B"
  "A A B"
  "A A B"
  "D D D"
  "E E E";
  gap: 1.2rem;

  @media (max-width: 786px){
    section {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width : 700px){
    display: flex;
    flex-direction: column;
  }
`