import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router';
import '../assets/Header.css';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Accueil</Nav.Link>
              <Nav.Link as={NavLink} to="/categorie/vetements" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Vêtements</Nav.Link>
              <Nav.Link as={NavLink} to="/categorie/chaussures" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Chaussures</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;