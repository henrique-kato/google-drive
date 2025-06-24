"use client";
import Head from "next/head";
import {
  Container,
  Main,
} from "@styles/sharedstyles";
import { Header } from "@components/Header";
import { SearchContainer } from "@components/containers/SearchContainer";
import { FileList } from "@components/containers/FileList";
import { FilesContainer } from "@components/containers/FilesContainer";
import { FileContent } from "@components/containers/FileContent";
import { useState } from "react";
import { NoFilesFound } from "@components/containers/NoFilesFound";

export default function Home() {
  const [files, setFiles] = useState(["a"]);
  const [title, setTitle] = useState("CLIQUE AQUI - Plano de atividades");
  const [fileType, setFileType] = useState("Word");
  const [date, setDate] = useState("24 de jun. de 2025");
  const [fileSize, setFileSize] = useState("3 MB");

  return (
    <Container>
      <Head>
        <title>Google Drive</title>
        <meta name="description" content="Drive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main>
        {files.length > 0 ?
          <FilesContainer>
            <SearchContainer/>
          {files.length > 0 ? <FileList files={files}/> : <NoFilesFound/>}
        </FilesContainer>
        <FileContent file={file}/>
      </Main>
    </Container>
  );
}
