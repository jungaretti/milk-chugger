import { Navbar, Nav, Button } from "react-bootstrap";

export default function NavBar({ logInWithGoogle, signOut, user }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Milk Chugger</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav>
        {user ? (
          <Nav>
            <Nav.Link href="log">Drink</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Button onClick={signOut}>Sign Out</Button>
          </Nav>
        ) : (
          <Nav>
            <Button onClick={logInWithGoogle}>Log In with Google</Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
