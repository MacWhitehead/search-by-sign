import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./topNav.css";
import { AiOutlineLeft } from "react-icons/ai";

const TopNavContainer = () => {
  return (
    <Navbar variant="dark" fixed="top">
      <Container className="topNavContainer topBorderNav">
        <LinkContainer to="/">
          <AiOutlineLeft />
        </LinkContainer>
        <Nav className="me-auto topNav">
          <LinkContainer to="/help">
            <Nav.Link>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                width="250"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124.61 20.98"
              >
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M120.5,17.64c0,2.51-1.76,3.74-4.21,3.74-2.26,0-3.17-.63-3.69-1.25L114,18.32a2.87,2.87,0,0,0,2.31,1.08c1.27,0,1.8-.47,1.8-1.78v-.47H118a2.75,2.75,0,0,1-1.81.52c-1.9,0-3.61-.94-3.61-4.24,0-2.59,1.47-4.69,4.48-4.69a8.1,8.1,0,0,1,3.41.56Zm-3.43-7c-1.29,0-2,.89-2,2.65s.65,2.36,1.74,2.36a1.76,1.76,0,0,0,1.29-.47V10.84A3,3,0,0,0,117.07,10.68Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M110.45,3.47l-.93,1.23a1.58,1.58,0,0,0-1.26,0,1.61,1.61,0,1,0,2.11.85,1.6,1.6,0,0,0-.23-.38l.93-1.23Zm-1.16,3.66a1,1,0,0,1-1.35-.54,1,1,0,1,1,1.35.54Z"
                  transform="translate(-6.15 -2.97)"
                />
                <rect
                  style={{ fill: "#0e4f7d" }}
                  x="9.25"
                  y="14.66"
                  width="3.32"
                  height="9.72"
                  transform="matrix(-0.65, -0.76, 0.76, -0.65, -2.94, 37.55)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M22.58,14.31c0-1.81-5.25-1.56-5.25-5.16,0-1.89,1.66-3.37,4-3.37a4.47,4.47,0,0,1,3.47,1.37L23.26,9a2.63,2.63,0,0,0-2.13-1.06c-.81,0-1.27.46-1.27,1,0,1.83,5.24,1.56,5.24,5.18,0,1.71-1.41,3.37-4.31,3.37a5.53,5.53,0,0,1-3.95-1.41l1.41-2.05a4.18,4.18,0,0,0,2.87,1.36C22.11,15.41,22.58,14.91,22.58,14.31Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M35.8,16.8a4.85,4.85,0,0,1-3.37,1c-2.89,0-4.37-1.63-4.37-4.8,0-3,1.65-4.75,4.31-4.75A3.44,3.44,0,0,1,36.06,12a10.92,10.92,0,0,1-.12,1.64H30.46c0,1.45.69,2.24,2.25,2.24a2.8,2.8,0,0,0,2-.82ZM30.51,12h3.24v-.24c0-1.07-.46-1.64-1.45-1.64A1.77,1.77,0,0,0,30.51,12Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M44.44,11.33V15c0,.52.19.74.63.74h.26v1.7a2.27,2.27,0,0,1-1.22.31,1.71,1.71,0,0,1-1.66-1h-.06a2.76,2.76,0,0,1-2.35,1,2.5,2.5,0,0,1-2.71-2.54c0-2.11,1.9-3.09,4.8-2.94v-.72a1.17,1.17,0,0,0-1.32-1.33,1.62,1.62,0,0,0-1.58,1L37.49,10a3.81,3.81,0,0,1,3.3-1.72C43.13,8.29,44.44,9.1,44.44,11.33ZM42.13,14c-1.61-.12-2.41.26-2.41,1a.89.89,0,0,0,1,.9,1.81,1.81,0,0,0,1.42-.65Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M52.37,10.76a6.19,6.19,0,0,0-1-.08,3.59,3.59,0,0,0-2.15.73v6.23H46.73V8.45h1.92l.5,1.35h.07a2.44,2.44,0,0,1,2.37-1.54,3.74,3.74,0,0,1,.78.08Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M57.3,8.27a3.75,3.75,0,0,1,3.17,1.34l-1.64,1.56a1.76,1.76,0,0,0-1.53-.88c-1.06,0-1.74.65-1.74,2.65s.57,2.86,1.73,2.86a1.77,1.77,0,0,0,1.56-.89l1.56,1.45a3.75,3.75,0,0,1-3.35,1.46c-2.49,0-4-1.37-4-4.68S54.81,8.27,57.3,8.27Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M69.5,11.44v6.2H67.05V11.93c0-1-.44-1.46-1.27-1.46a2,2,0,0,0-1.58,1v6.16H61.74V5.31H64.2V9.38h.06a3.37,3.37,0,0,1,2.43-1C68.48,8.39,69.5,9.38,69.5,11.44Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M75.46,5.4h2.43V9H78a3.31,3.31,0,0,1,1.79-.51c2.08,0,3.63,1.14,3.63,4.52,0,2.8-1.64,4.93-4.7,4.93a7.23,7.23,0,0,1-3.21-.58Zm5.47,7.76c0-2.05-.72-2.7-1.77-2.7a1.66,1.66,0,0,0-1.24.49v4.86a2.72,2.72,0,0,0,.93.13C80.15,15.94,80.93,15.11,80.93,13.16Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M84.82,18.9a2.1,2.1,0,0,0,1,.23,1.38,1.38,0,0,0,1.48-1.43L83.84,8.54h2.75l1,3.12a23,23,0,0,1,.82,3.21h.06a27.61,27.61,0,0,1,.69-3.21L90,8.54h2.54l-3.1,9.65c-.52,1.61-1.43,3-3.57,3a4.07,4.07,0,0,1-1.5-.28Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M103.34,14.69c0-1.81-5.25-1.56-5.25-5.16,0-1.88,1.66-3.36,4-3.36a4.46,4.46,0,0,1,3.46,1.36L104,9.37a2.67,2.67,0,0,0-2.13-1.06c-.82,0-1.27.46-1.27,1,0,1.84,5.23,1.56,5.23,5.19,0,1.7-1.41,3.36-4.31,3.36a5.53,5.53,0,0,1-4-1.41L99,14.43a4.12,4.12,0,0,0,2.86,1.37C102.87,15.8,103.34,15.29,103.34,14.69Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M107.65,9h2.45v9.19h-2.45Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M130.75,17.77H128.3V11.93c0-.94-.44-1.49-1.27-1.49a1.68,1.68,0,0,0-1.58,1.09v6.24H123V8.58h1.91l.49.86h.07a3.3,3.3,0,0,1,2.47-1.09c1.79,0,2.81,1,2.81,3.06Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M108.89,7.45a1.27,1.27,0,1,1,1.27-1.27A1.27,1.27,0,0,1,108.89,7.45Zm0-2.07a.81.81,0,1,0,0,1.61.81.81,0,1,0,0-1.61Z"
                  transform="translate(-6.15 -2.97)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M21,20.17a8.6,8.6,0,1,1,8.6-8.6A8.61,8.61,0,0,1,21,20.17ZM21,4.65a6.92,6.92,0,1,0,6.91,6.92A6.93,6.93,0,0,0,21,4.65Z"
                  transform="translate(-6.15 -2.97)"
                />
              </svg>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/settings">
            <Nav.Link>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16.28 16.28"
              >
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M18.14,10v.66a1.07,1.07,0,0,1-.94,1.12l-.95.16a.21.21,0,0,0-.11.1c-.13.28-.24.57-.36.85a.13.13,0,0,0,0,.15l.57.8a1.07,1.07,0,0,1-.12,1.43c-.32.32-.64.65-1,1a1.06,1.06,0,0,1-1.43.11l-.78-.55a.14.14,0,0,0-.17,0c-.28.12-.55.24-.83.34a.17.17,0,0,0-.12.16c-.06.33-.11.67-.17,1a1.07,1.07,0,0,1-1,.86H9.31a1.07,1.07,0,0,1-1.09-.94c-.05-.31-.11-.63-.16-.94A.16.16,0,0,0,8,16.12c-.27-.1-.54-.21-.8-.33a.15.15,0,0,0-.17,0l-.8.58a1.08,1.08,0,0,1-1.41-.11l-1-1a1.07,1.07,0,0,1-.12-1.42l.57-.78a.15.15,0,0,0,0-.17c-.12-.27-.24-.55-.35-.83A.15.15,0,0,0,3.76,12l-1-.17a1.08,1.08,0,0,1-.93-1.08c0-.43,0-.86,0-1.3a1.12,1.12,0,0,1,1-1.2c.28,0,.57-.09.85-.14A.2.2,0,0,0,3.85,8c.12-.3.25-.59.36-.89a.19.19,0,0,0,0-.13c-.19-.28-.38-.54-.58-.81a1.09,1.09,0,0,1,.13-1.43c.32-.33.65-.65,1-1a1.07,1.07,0,0,1,1.41-.12l.79.58a.14.14,0,0,0,.16,0l.84-.35A.15.15,0,0,0,8,3.75c.06-.35.11-.7.18-1a1.06,1.06,0,0,1,1-.85h1.36a1.09,1.09,0,0,1,1.16,1c0,.29.09.59.15.89a.13.13,0,0,0,.08.1l.93.38a.17.17,0,0,0,.12,0c.27-.18.53-.37.79-.56a1.07,1.07,0,0,1,1.46.13l.94.94a1.08,1.08,0,0,1,.12,1.45c-.18.26-.36.52-.55.77a.15.15,0,0,0,0,.18c.12.27.23.54.34.81a.17.17,0,0,0,.16.13l1,.17a1.05,1.05,0,0,1,.86,1ZM4.49,5.54,5.3,6.69a.51.51,0,0,1,0,.62,5.32,5.32,0,0,0-.55,1.35.55.55,0,0,1-.49.43L3,9.32l0,0c0,.44,0,.88,0,1.31,0,0,0,.08.08.09L4.32,11a.55.55,0,0,1,.49.43,4.74,4.74,0,0,0,.53,1.27.63.63,0,0,1,0,.77c-.27.35-.51.71-.75,1.05l1,1,1.15-.81a.53.53,0,0,1,.59,0,6.1,6.1,0,0,0,1.37.57.48.48,0,0,1,.38.41c0,.28.1.56.14.84s.07.39.1.58h1.42a.29.29,0,0,0,0-.09c.07-.4.15-.81.2-1.22a.61.61,0,0,1,.5-.55,5.25,5.25,0,0,0,1.27-.53.56.56,0,0,1,.67,0c.31.23.63.45,1,.67l.16.11,1-1c-.26-.38-.53-.75-.8-1.13a.54.54,0,0,1,0-.62,5.81,5.81,0,0,0,.57-1.39.53.53,0,0,1,.42-.39l.55-.09.87-.15V9.29l-.13,0-1.25-.21a.52.52,0,0,1-.46-.42,5.67,5.67,0,0,0-.56-1.35.56.56,0,0,1-.07-.18.53.53,0,0,1,.1-.45l.8-1.12-1-1-1.13.8a.53.53,0,0,1-.61,0,5.54,5.54,0,0,0-1.42-.59.5.5,0,0,1-.39-.41l-.12-.71-.12-.71H9.27l0,.13L9,4.35a.54.54,0,0,1-.42.45,5.08,5.08,0,0,0-1.34.56.56.56,0,0,1-.65,0L5.74,4.7l-.25-.17Z"
                  transform="translate(-1.86 -1.86)"
                />
                <path
                  style={{ fill: "#0e4f7d" }}
                  d="M13.56,10A3.56,3.56,0,1,1,10,6.44,3.56,3.56,0,0,1,13.56,10Zm-1.08,0A2.48,2.48,0,1,0,10,12.48,2.47,2.47,0,0,0,12.48,10Z"
                  transform="translate(-1.86 -1.86)"
                />
              </svg>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavContainer;
