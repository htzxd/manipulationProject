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
    
    h2 {
      text-align: center;
    }
  }

  .cardsAside {
    display: flex;
    margin-top: 1.8rem;
    padding: 1.2rem;

    img {
      width: 4.8rem;
    }
  }

  .cards, .cardsAside {
    padding: 1.2rem;
  }

  .cards:hover, .cardsAside:hover {
    color: ${({ theme }) => theme.colors.text_hover};
    cursor: pointer;
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

  .playlists {
    margin: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text_primary};
    cursor: pointer;

    img {
      width: 100%;
      max-height: 13rem;
      border-radius: .8rem;
      object-fit: cover;
    }

    h3 {
      line-height: 150%;
    }
  }

  .playlists:hover {
    color: ${({ theme }) => theme.colors.text_hover};
    cursor: pointer;
  }
`

export const Cards = styled.div`
  display: flex;
  margin: 1.2rem;
`

export const CardsAside = styled.div`
  display: flex;
  margin-top: 1.8rem;
  padding: 1.2rem;

  img {
    width: 4.8rem;
  }
`
