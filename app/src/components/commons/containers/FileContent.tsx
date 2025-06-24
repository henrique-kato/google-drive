import styled from "styled-components";
import { FaFileAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

type FileContentProps = {
  title: string;
  fileType: string;
  date: string;
  fileSize: string;
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

  h2 {
    font-size: large;
  }
`

const FileTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FileInfo = styled.div`
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

function FileContent({title, fileType, date, fileSize}: FileContentProps){
  return (
    <FileContentStyle>
      <FileTitle>
        <FaFileAlt size={29}/>
        <h2>{title}</h2>
      </FileTitle>
      <IconContainer>
        <Icon>
          <MdOutlineFileDownload size={22}/>
        </Icon>
        <Icon>
          <MdDelete size={22}/>
        </Icon>
      </IconContainer>
      <FileInfo>
        <InfoContainer>
          <TitleParagraph>Tipo do arquivo</TitleParagraph>
          <InfoParagraph>Arquivo {fileType}</InfoParagraph>
        </InfoContainer>
        <InfoContainer>
          <TitleParagraph>Criado em</TitleParagraph>
          <InfoParagraph>{date}</InfoParagraph>
        </InfoContainer>
        <InfoContainer>
          <TitleParagraph>Tamanho</TitleParagraph>
          <InfoParagraph>{fileSize}</InfoParagraph>
        </InfoContainer>
      </FileInfo>
    </FileContentStyle>
  )
}

export {FileContent}
