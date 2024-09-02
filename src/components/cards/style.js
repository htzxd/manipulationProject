import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 1.2rem;
  padding: 1.2rem;

  .textCardArt {
    display: flex;
    flex-direction: column;
    margin-left: 1.8rem;
  }
  
  :hover{
    color: ${({ theme }) => theme.colors.text_hover};
    cursor: pointer;
  }
`