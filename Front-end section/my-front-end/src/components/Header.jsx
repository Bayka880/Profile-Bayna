import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import ".././style/header.css";
export default function Header() {
  return (
    <div>
      <Navbar className="NavBar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bayna</Navbar.Brand>
          <Nav className="m-auto nav-section">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
