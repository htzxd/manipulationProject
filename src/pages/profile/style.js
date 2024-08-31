import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  
`

export const Main = styled.div`
  color: ${({ theme }) => theme.colors.text_primary};
  margin-top: 1.2rem;
  
  img {
    max-height: 50rem;
  }
`

export const Aside = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text_primary};
  }
`