import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: grid;
  }
`

export const Main = styled.div`
  color: ${({ theme }) => theme.colors.text_primary};
`