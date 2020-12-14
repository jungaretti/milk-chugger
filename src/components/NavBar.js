import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar({ logInWithGoogle, signOut, user }) {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Milk Chugger</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {user ? (
          <Nav>
            <LinkContainer to="/add">
              <Nav.Link>Add</Nav.Link>
            </LinkContainer>
            <LinkContainer to="profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
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
