import styled from "styled-components";

export const Container = styled.div`
  header {
    margin-top: .8rem;
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    border-radius: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 10rem;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-left: 1.8rem;

    h1 {
      margin: 2.4rem 1.3rem;
      font-size: 3.2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text_hover};
      cursor: default;
    }
  }
  
  

  ul {
    display: flex;
    margin: 1.4rem 1.8rem;
  
    li {
      margin-inline: 1rem;
      list-style: none;

      a {
        font-size: 2.4rem;
        text-decoration: none;
      }

      a:hover {
        color: ${({ theme }) => theme.colors.text_hover}
      }
    }
  }

  li, a {
    color: ${({ theme }) => theme.colors.text_primary};
  }
`