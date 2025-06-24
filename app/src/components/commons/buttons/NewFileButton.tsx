import styled from "styled-components";

const NewFileButtonStyle = styled.label`
  background: #1B74FF;
  padding: 11px 22px;
  color: white;
  border-radius: 5px;
  width: fit-content;
  height: 39px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #357fff;
  }
`

const AddFileInput = styled.input`
  display: none;
`

function NewFileButton(){
  return (
    <NewFileButtonStyle htmlFor="upload">
      Novo arquivo
      <AddFileInput type="file" id="upload"/>
    </NewFileButtonStyle>
  )
}

export { NewFileButton }
