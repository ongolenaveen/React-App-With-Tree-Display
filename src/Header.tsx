import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tree</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
          <Nav.Link className="nav-link">
            <NavLink to="clients" className={'nav-link'}>
              D3 Tree
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <NavLink to="echarts" className={'nav-link'}>
              Echarts
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <NavLink to="vsix" className={'nav-link'}>
              Vsix
            </NavLink>
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Naveen Papisetty</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
