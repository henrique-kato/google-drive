import styled from "styled-components";
import { CiFileOff } from "react-icons/ci";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  text-align: center;

  h3 {
    color: white;
    margin-bottom: 8px;
  }

  p {
    color: #A0A0A0;
  }
`

const IconNotFound = styled.div`
  border-radius: 100%;
  background: #1B74FF;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

function NoFilesFound(){
  return (
    <Container>
      <IconNotFound>
        <CiFileOff size={137}/>
      </IconNotFound>
      <div>
        <h3>Nenhum arquivo encontrado.</h3>
        <p>Tente alterar os filtros ou fazer upload de um novo arquivo.</p>
      </div>
    </Container>
  )
}

export { NoFilesFound }
