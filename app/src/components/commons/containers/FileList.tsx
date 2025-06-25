import styled from "styled-components";
import { FileCard } from "@components/cards/FileCard";
import { FileInfo } from "@types/FileInfo";

interface FileListProps {
  openDetails: (file: FileInfo)=>void;
  files: FileInfo[]
}

const FileListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 286px);
  gap: 20px;
  height: fit-content;
`

function FileList({openDetails, files}: FileListProps){
  return (
    <FileListStyle>
      {files.map((file) => (<FileCard key={file.id} file={file} openDetails={openDetails}/>))}
    </FileListStyle>
  )
}

export { FileList }
