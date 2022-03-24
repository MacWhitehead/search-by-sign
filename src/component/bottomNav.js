import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./bottomNav.css"

const BottonNavContainer = () => {
      return(
        <Navbar variant="dark" fixed="bottom">
        <Container className="mainContainer">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/library">
            <Nav.Link >Library</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resultNotFound">
            <Nav.Link>Calendar</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/help">
              <Nav.Link >Help</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      ) 
  }

export default BottonNavContainer