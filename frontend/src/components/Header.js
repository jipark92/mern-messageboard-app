import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">MERN Message Board App</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}