
import {Navbar, Nav}  from 'react-bootstrap';

export default function NavBar() {
  return (
    <div>
        <span>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="dashboard">Milk Consumption Statistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="dashboard">Dashboard</Nav.Link>
                <Nav.Link  href="log">Add Log</Nav.Link>
            </Nav>
            <Nav inline className="mr-sm-2">
                <Nav.Link href="profile">Profile</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </span>
    </div>
  );
}