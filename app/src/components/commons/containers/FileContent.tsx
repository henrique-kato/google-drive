import styled from "styled-components";
import { FaFileAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FileInfo } from "@types/FileInfo";
import axios from "axios";

interface FileContentProps {
  file: FileInfo
  reloadFiles: ()=>void;
}

const FileContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #404040;
  color: white;
  gap: 36px;
  height: fit-content;
  padding-bottom: 36px;
  position: sticky;
  top: 230px;
  min-width: 380px;

  h2 {
    font-size: large;
  }
`

const FileTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const IconContainer = styled.div`
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
  padding: 16px 0;
  display: flex;
  gap: 16px;
`

const Icon = styled.div`
  background: #404040;
  border-radius: 5px;
  width: 51px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TitleParagraph = styled.p`
  font-size: small;
  margin: 0;
`

const InfoParagraph = styled.p`
  font-size: small;
  color: #A0A0A0;
  margin: 0;
`

function FileContent({file, reloadFiles}: FileContentProps){
  function deleteFile(id: string){
    axios.delete(`http://localhost:5080/file/${file.id}`)
    .then(function () {
      reloadFiles();
    });
  }

  return (
    <FileContentStyle>
      <FileTitle>
        <FaFileAlt size={29}/>
        <h2>{file.fileName}</h2>
      </FileTitle>
      <IconContainer>
        <Icon >
          <MdOutlineFileDownload size={22}/>
        </Icon>
        <Icon onClick={()=>deleteFile(file.id)}>
          <MdDelete size={22}/>
        </Icon>
      </IconContainer>
      <FileInfoContainer>
        <InfoContainer>
          <TitleParagraph>Tipo do arquivo</TitleParagraph>
          <InfoParagraph>Arquivo {file.fileType}</InfoParagraph>
        </InfoContainer>
        <InfoContainer>
          <TitleParagraph>Criado em</TitleParagraph>
          <InfoParagraph>{file.date}</InfoParagraph>
        </InfoContainer>
        <InfoContainer>
          <TitleParagraph>Tamanho</TitleParagraph>
          <InfoParagraph>{file.size}</InfoParagraph>
        </InfoContainer>
      </FileInfoContainer>
    </FileContentStyle>
  )
}

export {FileContent}
