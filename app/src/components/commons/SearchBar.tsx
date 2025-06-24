import styled from "styled-components";

const SearchBarStyle = styled.input`
  outline: none;
  background-color: #272628;
  padding: 1rem 1.5rem;
  border: none;
  font-size: small;
  width: 632px;
  height: 50px;
  border-radius: 300px;
  border: 1px solid #404040
`
function SearchBar() {
  return (
    <SearchBarStyle type="text" placeholder="Pesquisar no seu Drive"/>
  )
}

export { SearchBar }
