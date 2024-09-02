import styled from "styled-components";

export const Container = styled.div`
  grid-area: C;
  font-style: italic;
  font-size: 3.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_primary};
  margin-top: 1.8rem;

  cursor: default;
`