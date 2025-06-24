import styled from "styled-components";
import { IoPerson } from "react-icons/io5";

const ProfilePic = styled.div`
  border-radius: 100%;
  width: 38px;
  height: 38px;
  background-color: #1B74FF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

function Profile(){
  return (
    <ProfileStyle>
      <div>Henrique Kato</div>
      <ProfilePic>
        <IoPerson size={24}/>
      </ProfilePic>
    </ProfileStyle>
  )
}

export { Profile }
