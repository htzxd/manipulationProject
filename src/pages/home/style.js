import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: grid;
    grid-template-areas:
    "C C B"
    "A A B"
    "A A B"
    "D D D"
    "E E E";
    gap: 1.2rem;
  }
  
  .titleHighlights {
    grid-area: C;
    font-style: italic;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text_primary};
    margin-top: 1.8rem;
  }

  article {
    grid-area: A;
  }

  aside{
    grid-area: B;
    margin-top: 1.2rem;
    padding: 1.2rem;
    
    h2 {
      text-align: center;
    }
  }
  
  .cards {
    display: flex;
    padding: 1.2rem;
  }

  .cardsAside {
    display: flex;
    margin-top: 1.2rem;
  }

  .cards, .cardsAside {
    padding: 1.2rem;
  }
  
  aside, article {
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    color: ${({ theme }) => theme.colors.text_primary};
    border-radius: .8rem;
  }

  .textCardArt {
    display: flex;
    flex-direction: column;
    margin-left: 1.8rem;
  }

  .pl {
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: 3.2rem;
    font-style: italic;
    font-weight: 400;

    grid-area: D;
  }

  section {
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    height: 22rem;
    border-radius: .8rem;
    
    grid-area: E;
  }

  footer {
    color: ${({ theme }) => theme.colors.text_primary};

    position: absolute;
    bottom: 0;
    right: 40%;
    left: 40%;

    padding: 1.2rem;

    span {
      font-style: italic;
    }
  }
`