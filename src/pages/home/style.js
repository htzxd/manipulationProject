import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: grid;
    grid-template-areas: 
    "A A B"
    "A A B";
    gap: 1.2rem;
  }
  
  article {
    grid-area: A;
  }

  aside{
    grid-area: B;
  }
  
  aside, article {
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    margin-top: 1.2rem;
    border-radius: .8rem;
  }

  .cards {
    display: flex;
  }

  .textCardArt {
    display: flex;
    flex-direction: column;
  }
`