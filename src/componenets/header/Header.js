import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <Navbar bg="dark" varient="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ "color": 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarscroll
          >
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/watchList" className="nav-link">
              Watch List
            </NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2">
            Login
          </Button>
          <Button variant="outline-info">
            Register
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header