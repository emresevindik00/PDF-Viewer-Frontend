import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Ana Sayfa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: "80px" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Navbar.Brand>Kullanıcı Girişi</Navbar.Brand>
              </Link>
              <Link to="/adminlogin" style={{ textDecoration: "none" }}>
                <Navbar.Brand>Admin Girişi</Navbar.Brand>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
