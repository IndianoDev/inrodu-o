import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Pagina } from "../components/Pagina";

export default function Home() {
  return (
    <>
      <Pagina/>
      <Container>
        <h1> Hello World </h1>
        <p>Qualquer texto</p>
        <p>Qualquer Texto</p>
        <p>Qualquer texto</p>
      </Container>
     
    </>
  )
}
