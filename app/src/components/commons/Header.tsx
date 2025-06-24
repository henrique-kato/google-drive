import styled from "styled-components";
import { Profile } from "./Profile";

const HeaderStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #404040;
  color: white;
`;

const Title = styled.h1`
  font-size: medium;
`

function Header(){
  return (
    <HeaderStyle>
      <Title>SOFTABLE</Title>
      <Profile/>
    </HeaderStyle>
  )
}

export { Header }
