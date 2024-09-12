import styled from "styled-components";

export const Container = styled.footer`
  .container {
    margin-top: 2.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${({ theme }) => theme.colors.text_primary};
    cursor: default;
    font-size: 1.8rem;
    font-family: 'Inter';
    padding: 1.8rem;
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    font-style : italic ;

    border-radius: .8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.text_hover};
  }
`