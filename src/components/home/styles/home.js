import styled from "styled-components";

import backgroundImage from "assets/image/hitunes-main.jpeg";

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1AE68C;
  color: #000;
  text-align: center;
  h1 {
      margin: 1rem auto;
      font-size: 7rem;
    }

    p {
      font-size: 1.5rem;
    }



  @media screen and (max-width: 768px) {
    h1 {
      margin: 0.5rem auto;
      font-size: 3.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const BG = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;

  color: #fff;
`;

export const Wrapper = styled.div``;


