import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: #2e45b9;
  color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: calc(50%);
  text-align: left;
  margin: 3rem;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  h4 {
    font-style: italic;
    font-size: 1.2rem;
    margin: 0;
  }

  ul {
    margin: auto 2rem;
    padding: 0;
    line-height: 33px;
  }

  h4 + li {
    margin: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 3rem auto 2rem;
    text-align: left;
  }
`;
