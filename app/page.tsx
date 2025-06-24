"use client";
import Head from "next/head";
import {
  Container,
  Main,
} from "@styles/sharedstyles";
import { Header } from "@components/Header";
import { SearchContainer } from "@components/containers/SearchContainer";
import { FileList } from "@components/containers/FileList";
import { FileContent } from "@components/containers/FileContent";
import { useEffect, useState } from "react";
import { NoFilesFound } from "@components/containers/NoFilesFound";
import axios from "axios";
import { FilesContainer } from "@components/containers/FilesContainer"

type FileInfo = {
  title: string;
  fileType: string;
  date: string;
  fileSize: string;
}

export default function Home() {
  const f: FileInfo = {
    title: "O",
    fileType: "word",
    date: "4809w",
    fileSize: "f3213"
  }
  const [files, setFiles] = useState([f]);
  const [file, setFile] = useState<FileInfo>(f);

  // useEffect(()=>{
  //   axios({
  //     method: "get",
  //     url: "http://localhost:5080/file"
  //   }).then(function (response) {
  //     setFiles(response.data)
  //   });
  // }, )

  return (
    <Container>
      <Head>
        <title>Google Drive</title>
        <meta name="description" content="Drive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main>
        <FilesContainer>
          <SearchContainer/>
          {files.length > 0 ? <FileList files={files}/> : <NoFilesFound/>}
        </FilesContainer>
        <FileContent file={file}/>
      </Main>
    </Container>
  );
}
