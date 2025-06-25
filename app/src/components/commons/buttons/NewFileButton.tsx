import axios from "axios";
import styled from "styled-components";
import { FileInfo } from "@types/FileInfo";

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

interface NewFileButtonProps {
  reloadFiles: ()=>void;
}

function NewFileButton({reloadFiles}: NewFileButtonProps){
  function sendNewFile(e: React.ChangeEvent<HTMLInputElement>){
    const formData = new FormData();
    const file = e.target.files?.[0];
    formData.append('file', file)
    axios.post("http://localhost:5080/file/FileDriveApi", formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(function () {
      reloadFiles();
    });
  }

  return (
    <NewFileButtonStyle htmlFor="upload">
      Novo arquivo
      <AddFileInput type="file" id="upload" onChange={(e)=>sendNewFile(e)}/>
    </NewFileButtonStyle>
  )
}

export { NewFileButton }
