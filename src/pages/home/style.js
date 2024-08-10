import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: grid;
    grid-template-areas:
    "C C B"
    "A A B"
    "A A B";
    gap: 1.2rem;
  }
  
  #titleHighlights {
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
    text-align: center;
  }
  
  aside, article {
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    color: ${({ theme }) => theme.colors.text_primary};
    border-radius: .8rem;
  }

  .cards {
    display: flex;
    padding: 1.2rem;
  }

  .textCardArt {
    display: flex;
    flex-direction: column;
    margin-left: 1.2rem;
  }
`