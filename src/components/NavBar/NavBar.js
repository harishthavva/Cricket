import React from 'react'
import tachyons from "tachyons"
import { Navbar,Container,Nav } from 'react-bootstrap';
import "./style.css"

export default function NavBar() {
    return (
       <>
          <Navbar bg="primary" variant="dark"  sticky="top">
              <Container>
              <Navbar.Brand><img src="https://img.icons8.com/emoji/48/000000/cricket-game-emoji.png" id="Image" alt="Image Logo"/></Navbar.Brand>
              <Navbar.Brand>Live Score</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact US</Nav.Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Admin</a>
            </Navbar.Text>
          </Navbar.Collapse>
              </Container>
            </Navbar>
       </>
    )
}
