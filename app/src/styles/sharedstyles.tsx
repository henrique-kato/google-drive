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
  padding: 70px 41px 40px 64px;
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  gap: 41px;
  justify-content: space-between;
`;

export { Container, Main };
