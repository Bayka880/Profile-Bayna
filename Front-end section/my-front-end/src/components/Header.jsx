import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import ".././style/header.css";
export default function Header() {
  const [update, setUpdate] = useState(false);
  console.log(update);
  return (
    <div>
      <Navbar className="NavBar" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="nickname">
            Bayna
          </Navbar.Brand>
          <Nav className="nav-section m-auto">
            <Nav.Link href="/" className="nav-link">
              HOME
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: update ? "red" : "blue" }}>
              ABOUT ME
            </Nav.Link>
            <Nav.Link href="#pricing">PORTFOLIO</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
