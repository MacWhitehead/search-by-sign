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
            <Nav.Link><svg id="Layer_1" width="40" height="40"
data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 14.21 17.5">
<path style={{fill: '#0e4f7d'}} 
d="M17.26,6.49,10.75,1.4a.48.48,0,0,0-.69,0L3.31,6.49a.48.48,0,0,0,.35.81H4.2a.48.48,0,0,1,.48.48V18.27a.47.47,0,0,0,.48.48h9.37l-2.48-3.08a3.78,3.78,0,0,1-1.8.45,3.89,3.89,0,1,1,3-1.4l2.9,3.59V7.78a.47.47,0,0,1,.48-.48h.3A.48.48,0,0,0,17.26,6.49Z" 
transform="translate(-3.18 -1.25)"/>
<circle style={{fill: '#0e4f7d'}} cx="7.07" cy="10.99" r="2.34"/>
</svg></Nav.Link>
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