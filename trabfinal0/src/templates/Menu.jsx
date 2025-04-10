import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextoLogin } from "../App";

export default function Menu(props) {
  const contextoLogin = useContext(ContextoLogin);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Menu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros objetos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/objeto">
                Objetos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          onClick={() => {
            contextoLogin.setDadosLogin({
              usuario: "",
              logado: false,
            });
          }}
        >
          Logout
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
