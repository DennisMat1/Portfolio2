import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  NavLink,
  Link,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Counter from "./OmhoogOmlaag";
const Header = () => {
  return (
    <div>
      <Navbar bg="secondary" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            Portfolio
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" aria-label="Toggle navigation"  >☰</Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/portfolio"}>
                Projecten
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/contact"}>
                Contact
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
