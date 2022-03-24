import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const TopNavContainer = () => {
      return(
        <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
        {/* <Navbar.Brand href="#home">SearchBySignLogo</Navbar.Brand> */}
        <Nav className="me-auto">
        <LinkContainer to="/help">
          <Nav.Link >
            <div>SearchBySignLogo</div>
            </Nav.Link>
            </LinkContainer>
          <Nav.Link href="#features">Settings</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      ) 
  }

export default TopNavContainer