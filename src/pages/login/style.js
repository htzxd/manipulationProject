import styled from "styled-components";

export const Container = styled.div`
  
  .signIn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors.bg_secondary};
    padding: 2rem;
    border-radius: 8px;

    color: white;
    gap: 1rem;
    
    h2 {
      font-size: 3.2rem;
      padding: 2rem;
    }
    
    input { 
      border: 1px solid white;
      border-radius: 8px;
      padding: 1.2rem;
      text-align: center;
      background-color: transparent;
    }
  }
`

export const Main = styled.div`
  display: grid;
  place-content: center;
  height: 80rem;
`