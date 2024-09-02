import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 1.8rem;
    padding: 1.2rem;

    :hover{
      color: ${({ theme }) => theme.colors.text_hover};
      cursor: pointer;
    }

    img {
      width: 4.8rem;
    }
    
    h3, p {
      margin-left: 1.8rem;
    }
`