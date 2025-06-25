import styled from "styled-components";
import { FaFileAlt } from "react-icons/fa";
import { truncate } from "@services/truncateText";
import { FileInfo } from "@types/FileInfo";

type FileCardProps = {
  file: FileInfo;
  openDetails: (file: FileInfo)=>void;
}

const FileCardStyle = styled.div`
  height: 116px;
  border: 1px solid #404040;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    border: 1px solid #1B74FF;
  }
`

const FileTitle = styled.h3`
  color: white;
  margin: 0;
`

const FileDate = styled.span`
  color: #A0A0A0;
`

function FileCard({file, openDetails}: FileCardProps){
  return (
    <FileCardStyle onClick={()=>{openDetails(file)}}>
      <FileTitle>{truncate(file.fileName)}</FileTitle>
      <FileDate><FaFileAlt color="white"/> {file.date}</FileDate>
    </FileCardStyle>
  )
}

export { FileCard }
