import styled from "styled-components";

export const Container = styled.div`
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

  .playlists:hover {
    color: ${({ theme }) => theme.colors.text_hover};
    cursor: pointer;
  }
`