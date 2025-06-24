import styled from "styled-components";
import { FileCard } from "@components/cards/FileCard";
type FileInfo = {
  title: string;
  fileType: string;
  date: string;
  fileSize: string;
}
type FileListProps = {
  files: FileInfo[]
}

const FileListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 286px);
  gap: 20px;
  height: fit-content;
`

function FileList({files}: FileListProps){
  return (
    <FileListStyle>
      {files.map((file, index) => (<FileCard key={index} title={file.title} date={file.date} />))}
    </FileListStyle>
  )
}

export { FileList }
