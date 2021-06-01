import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9af0e1;
  color: #2c45b9;


`;

export const Div = styled.div`
  margin: 3rem;
  text-align: center;
  
  h4,
  h5,
  h6 {
    margin: 1rem 1.5rem;
  }

  h5 {
    color: red;
  }
  
  div h6:nth-child(2) {
    color: red;
  }
  


  @media screen and (max-width: 768px) {
  
    
  }
`;
