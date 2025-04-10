import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho.jsx";
import Menu from "./Menu.jsx";

export default function Pagina(props) {
  return (
    <Container>
      <Cabecalho titulo={props.titulo} />
      <Menu />
      <Container className="p-4 border" style={{ color: "#2F4F4F" }}>
        {}
        {props.children}
      </Container>
    </Container>
  );
}
