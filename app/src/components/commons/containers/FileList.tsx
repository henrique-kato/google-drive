import styled from "styled-components";
import { FileCard } from "@components/cards/FileCard";

const FileListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 286px);
  gap: 20px;
  height: fit-content;
`

function FileList(){
  return (
    <FileListStyle>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
      <FileCard title="CLIQUE AQUI - Plano de atividades" date="24 de jun. de 2025"/>
    </FileListStyle>
  )
}

export { FileList }
