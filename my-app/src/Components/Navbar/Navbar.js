import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

function NavbarComp(){

    return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Users Project</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Umakanta</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavbarComp