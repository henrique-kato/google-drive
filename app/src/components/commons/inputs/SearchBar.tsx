import styled from "styled-components";

const SearchBarStyle = styled.input`
  outline: none;
  background-color: #272628;
  padding: 22px 37px;
  border: none;
  font-size: small;
  width: 632px;
  height: 50px;
  border-radius: 300px;
  border: 1px solid #404040;
  color: #A0A0A0;
`

interface SearchBarProps {
  search: string;
  onChange: (text: string)=>void;
}

function SearchBar({search, onChange}: SearchBarProps) {
  return (
    <SearchBarStyle type="text" placeholder="Pesquisar no seu Drive" value={search} onChange={(e)=>{onChange(e.target.value)}}/>
  )
}

export { SearchBar }
