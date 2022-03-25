import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./bottomNav.css"

const BottonNavContainer = () => {
      return(
        <Navbar variant="dark" fixed="bottom">
        <Container className="mainContainer border-top border-info" >
          <div className="coloredBorder"></div>
          <Nav className="me-auto nav">
            <LinkContainer to="/">
            <Nav.Link>
              <svg id="Layer_1" width="40" height="40"
                data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 14.21 17.5">
                <path style={{fill: '#0e4f7d'}} 
                d="M17.26,6.49,10.75,1.4a.48.48,0,0,0-.69,0L3.31,6.49a.48.48,0,0,0,.35.81H4.2a.48.48,0,0,1,.48.48V18.27a.47.47,0,0,0,.48.48h9.37l-2.48-3.08a3.78,3.78,0,0,1-1.8.45,3.89,3.89,0,1,1,3-1.4l2.9,3.59V7.78a.47.47,0,0,1,.48-.48h.3A.48.48,0,0,0,17.26,6.49Z" 
                transform="translate(-3.18 -1.25)"/>
                <circle style={{fill: '#0e4f7d'}} cx="7.07" cy="10.99" r="2.34"/>
              </svg></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/library">
            <Nav.Link >
              <svg id="Layer_1" data-name="Layer 1" width="40" height="40"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 13.57 15.55">
                <path style={{fill: "#0e4f7d"}}
                d="M16.79,5.52V17.13a.58.58,0,0,1-.47.57,3.19,3.19,0,0,1-.52.06c-3.3,0-6.59,0-9.89,0C4,17.72,3.25,17,3.23,15c0-3.34,0-6.69,0-10,0-1.92.82-2.72,2.71-2.73,2.51,0,5,0,7.52,0a.51.51,0,0,1,.23.07.57.57,0,0,1-.1,1.07l-.1,0c-2.32,0-4.65,0-7,.06a1.72,1.72,0,0,0-.62.16.58.58,0,0,0,0,1.07,2,2,0,0,0,.67.16c2.87.07,5.75,0,8.63,0,.34,0,.67,0,1,0A.59.59,0,0,1,16.79,5.52Z" 
                transform="translate(-3.21 -2.22)"/>
              </svg>
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resultNotFound">
            <Nav.Link><svg id="Layer_1" data-name="Layer 1" width="40" height="40"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.3 18.19">
              <rect style={{fill: "#0e4f7d"}} x="1.16" y="5.43" width="14.25" height="1.78"/>
              <path style={{fill: "#0e4f7d"}} d="M17.28,13.08" transform="translate(-1.86 -0.9)"/>
              <path style={{fill: "#0e4f7d"}} d="M13.46,17.94" transform="translate(-1.86 -0.9)"/>
              <rect style={{fill: "#0e4f7d"}} x="10.11" width="1.84" height="4.81"/>
              <rect style={{fill: "#0e4f7d"}} x="4.52" width="1.84" height="4.81"/>
              <path style={{fill: "#0e4f7d"}} d="M14.9,19.1H5.12a3.27,3.27,0,0,1-3.26-3.26V6.06A3.27,3.27,0,0,1,5.12,2.8H14.9a3.26,3.26,0,0,1,3.26,3.26v9.78A3.27,3.27,0,0,1,14.9,19.1ZM5.12,4.57A1.49,1.49,0,0,0,3.64,6.06v9.78a1.49,1.49,0,0,0,1.48,1.48H14.9a1.49,1.49,0,0,0,1.49-1.48V6.06A1.49,1.49,0,0,0,14.9,4.57Z" 
              transform="translate(-1.86 -0.9)"/>
              <rect style={{fill: "#0e4f7d"}} x="3.86" y="12.88" width="1.5" height="1.5"/>
              <rect style={{fill: "#0e4f7d"}} x="7.63" y="12.88" width="1.5" height="1.5"/>
              <rect style={{fill: "#0e4f7d"}} x="11.6" y="12.88" width="1.5" height="1.5"/>
              <path style={{fill: "#0e4f7d"}} d="M15.29,11.72H13.13V9.56h2.16Zm-1.49-.67h.83v-.83H13.8Z" 
              transform="translate(-1.86 -0.9)"/>
              <rect style={{fill: "#0e4f7d"}} x="3.86" y="8.99" width="1.5" height="1.5"/>
              <rect style={{fill: "#0e4f7d"}} x="7.63" y="8.99" width="1.5" height="1.5"/></svg>
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/help">
              <Nav.Link >
              <svg id="Layer_1" data-name="Layer 1" width="40" height="40"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.43 14.43">
                <path style={{fill: "#0e4f7d"}} d="M9.1,12.37a5.44,5.44,0,0,1,.09-1,2.69,2.69,0,0,1,.4-.89l1.68-2.5a2.42,2.42,0,0,0,.46-1.32,1.78,1.78,0,0,0-.53-1.33,1.74,1.74,0,0,0-2.38,0,2,2,0,0,0-.54,1.34.4.4,0,0,1-.4.37H6.69a.4.4,0,0,1-.4-.4h0A3.71,3.71,0,0,1,7.4,3.88,3.56,3.56,0,0,1,10,2.78a3.88,3.88,0,0,1,2.61,1,3.75,3.75,0,0,1,1.14,2.84,3.7,3.7,0,0,1-.6,2.11l-1.7,2.52a2.1,2.1,0,0,0-.32,1.27v.74a.41.41,0,0,1-.41.41H9.5a.4.4,0,0,1-.4-.41Zm.4,2.8h1.18a.41.41,0,0,1,.41.41v1.23a.41.41,0,0,1-.41.41H9.5a.4.4,0,0,1-.4-.41V15.58A.4.4,0,0,1,9.5,15.17Z" 
                transform="translate(-6.29 -2.78)"/>
              </svg>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      ) 
  }

export default BottonNavContainer