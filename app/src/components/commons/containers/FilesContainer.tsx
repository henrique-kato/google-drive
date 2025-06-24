import styled from "styled-components";
import { FileCard } from "@components/cards/FileCard";

const FilesContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 286px));
  gap: 20px;
  height: fit-content;
`

function FilesContainer(){
  return (
    <FilesContainerStyle>
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
    </FilesContainerStyle>
  )
}

export { FilesContainer }
