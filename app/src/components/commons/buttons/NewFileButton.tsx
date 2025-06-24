import styled from "styled-components";

const NewFileButtonStyle = styled.button`
  background: #1B74FF;
  padding: 11px 22px;
  color: white;
  border-radius: 5px;
  width: 130px;
  height: 39px;
  border: none;
  cursor: pointer;
  :hover {
    background: #71a1f3;
  }
`

function NewFileButton(){
  return (
    <NewFileButtonStyle>Novo arquivo</NewFileButtonStyle>
  )
}

export { NewFileButton }
