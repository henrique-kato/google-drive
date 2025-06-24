import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: fit-content;
  min-height: 100vh;
  background-color: black;
`;

const Main = styled.main`
  padding: 70px 0 0 64px;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export { Container, Main };
