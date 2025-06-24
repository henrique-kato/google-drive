import styled from "styled-components";

import { SearchBar } from "@components/inputs/SearchBar"
import { NewFileButton } from "@components/buttons/NewFileButton";

const SearchContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`

function SearchContainer(){
  return (
    <SearchContainerStyle>
      <SearchBar />
      <NewFileButton/>
    </SearchContainerStyle>
  )
}

export { SearchContainer }
