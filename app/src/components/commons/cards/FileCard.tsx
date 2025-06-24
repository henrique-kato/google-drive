import styled from "styled-components";

type FileCardProps = {
  title: string;
  date: string;
}

const FileCardStyle = styled.div`
  height: 116px;
  border: 1px solid #404040;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FileTitle = styled.h3`
  color: white;
  margin: 0;
`

const FileDate = styled.span`
  color: #A0A0A0;
`

function FileCard({title, date}: FileCardProps){
  return (
    <FileCardStyle>
      <FileTitle>{title}</FileTitle>
      <FileDate>c {date}</FileDate>
    </FileCardStyle>
  )
}

export { FileCard }
