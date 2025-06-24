import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  background-color: black;
`;

const Main = styled.main`
  padding: 5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export { Container, Main };
