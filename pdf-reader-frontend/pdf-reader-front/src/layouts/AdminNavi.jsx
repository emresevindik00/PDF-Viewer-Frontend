import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <Navbar.Brand> Profilim </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Link
                to="/admingetbywriter"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
              >
                Yazara Göre Ara
              </Link>
              <Link
                to="/admingetbylesson"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
              >
                Derse Göre Ara
              </Link>
              <Link
                to="/admingetbytitle"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
              >
                Başlığa Göre Ara
              </Link>
              <Link
                to="/admingetbyterm"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
              >
                Döneme Göre Ara
              </Link>
              <Link
                to="/admingetbykey"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
              >
                Anahtar Kelimeye Göre Ara
              </Link>
              <Link
                to="/admingetbysecondquery"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
              >
                SORGU II
              </Link>
            </Nav>
            <Nav>
              <Button variant="danger">
                <Link
                  to="/home"
                  onClick={() => sessionStorage.clear()}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Çıkış Yap
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
