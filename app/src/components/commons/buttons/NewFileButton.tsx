import styled from "styled-components";

const NewFileButtonStyle = styled.button`
  background: #1B74FF;
  padding: 11px 22px;
  color: white;
  border-radius: 5px;
  max-width: fit-content;
`

function NewFileButton(){
  return (
    <NewFileButtonStyle>Novo arquivo</NewFileButtonStyle>
  )
}

export { NewFileButton }
