import styled from "styled-components";

export const Container = styled.div`
  header {
    margin: .8rem;
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    border-radius: .8rem;
  }
  
  h1, li {
    color: ${({ theme }) => theme.colors.text_primary};
  }
`