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
import { FileInfo } from "@types/FileInfo";
import { convertToLocalDateTime } from "@services/dateConverter";
import { SearchBar } from "@components/inputs/SearchBar"
import { NewFileButton } from "@components/buttons/NewFileButton";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState<FileInfo|null>(null);

  useEffect(()=>{
    loadFiles();
  }, [])

  function loadFiles(){
    axios({
      method: "get",
      url: "http://localhost:5080/file"
    }).then(function (response) {
      const data = response.data.map((f: FileInfo) => ({...f, date: convertToLocalDateTime(f.uploadDateTime)}))
      setFiles(data)
    });
  }

  function openDetails(file: FileInfo){
    axios({
      method: "get",
      url: `http://localhost:5080/file/${file.id}`
    }).then(function (response) {
      const data = response.data
      setFile({...file, url: data})
    });
  }

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
          <SearchContainer>
            <SearchBar />
            <NewFileButton reloadFiles={loadFiles}/>
          </SearchContainer>
          {files.length > 0 ? <FileList files={files} openDetails={openDetails}/> : <NoFilesFound/>}
        </FilesContainer>
        {file && <FileContent file={file} reloadFiles={loadFiles}/>}
      </Main>
    </Container>
  );
}
