import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function NavbarComp() {

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Users Project</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/userform"> <Button> Create User</Button></Link>
                    <Link to="/counter"> <Button> Couter Page</Button></Link>
                    <Link to="/login">  <Button> Logout</Button></Link>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Umakanta</a>
                    </Navbar.Text>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    );

}

export default NavbarComp