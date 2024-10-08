import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 1.8rem;
    padding: 1.2rem;
    align-items: center;

    :hover{
      color: ${({ theme }) => theme.colors.text_hover};
      cursor: pointer;
    }

    img {
      width: 5rem;
      border-radius: 8px;
      overflow: hidden;
      object-fit: cover;
    }
    
    h3, p {
      margin-left: 1.8rem;
    }
`