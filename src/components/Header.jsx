import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/categorie/vetements">Vêtements</Nav.Link>
            <Nav.Link as={Link} to="/categorie/chaussures">Chaussures</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header; 