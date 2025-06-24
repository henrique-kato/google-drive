import styled from "styled-components";

const ProfilePic = styled.div`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background-color: white;
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
      <ProfilePic/>
    </ProfileStyle>
  )
}

export { Profile }
