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
import { use, useEffect, useState } from "react";
import { NoFilesFound } from "@components/containers/NoFilesFound";
import axios from "axios";
import { FilesContainer } from "@components/containers/FilesContainer"
import { FileInfo } from "@types/FileInfo";
import { convertToLocalDateTime } from "@services/dateConverter";
import { SearchBar } from "@components/inputs/SearchBar"
import { NewFileButton } from "@components/buttons/NewFileButton";

export default function Home() {
  const [allFiles, setAllFiles] = useState([]);
  const [displayedFiles, setDisplayedFiles] = useState([]);
  const [file, setFile] = useState<FileInfo|null>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(()=>{
    loadFiles();
  }, [])

  function loadFiles(){
    axios({
      method: "get",
      url: "http://localhost:5080/file"
    }).then(function (response) {
      const data = response.data.map((f: FileInfo) => ({...f, date: convertToLocalDateTime(f.uploadDateTime)}))
      setDisplayedFiles(data);
      setAllFiles(data);
      setFile(null);
    });
  }

  function openDetails(file: FileInfo){
    setFile(null);
    axios({
      method: "get",
      url: `http://localhost:5080/file/${file.id}`
    }).then(function (response) {
      const data = response.data
      setFile({...file, blob: data})
    });
  }

  function onSearch(text: string){
    if(text === "") setDisplayedFiles(allFiles);
    setSearch(text);
    setDisplayedFiles(allFiles.filter((file: FileInfo)=>(file.fileName.startsWith(text))));
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
            <SearchBar search={search} onChange={onSearch}/>
            <NewFileButton reloadFiles={loadFiles}/>
          </SearchContainer>
          {displayedFiles.length > 0 ? <FileList files={displayedFiles} openDetails={openDetails}/> : <NoFilesFound/>}
        </FilesContainer>
        {file && <FileContent file={file} reloadFiles={loadFiles}/>}
      </Main>
    </Container>
  );
}
