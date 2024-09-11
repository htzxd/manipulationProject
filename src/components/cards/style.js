import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 1.2rem;
  padding: 1.2rem;
  align-items: center;

  img {
    height: 5rem;
    width: 5rem;
    border-radius: 8px;
    object-fit: cover;
    overflow: hidden;
  }

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