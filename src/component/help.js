import React from "react";
import { Container, FormGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./help.css"

const HelpPage = () => {
      return(
        <Container className="helpContainer">
            <p className="helpHeader">How can we help?</p>
          <div className="helpSendMessageContainer">
            <p className="helpFormHeader">Send us a message</p>
            <input className="helpEmail" type="email" placeholder="Enter your email"/>
            <textarea rows="4" className="helpMessage" type="text" placeholder="Type your message or questions here"/>
            <LinkContainer to="/confirmSubmit">
            <button className="helpSubmitMessage">Submit</button>
            </LinkContainer>
          </div>
          <p className="helpNoResults">No results for your sign search?</p>
          <LinkContainer to="/sendUsYourSign">
            <button className="helpSendSign">Send us your sign</button>
        </LinkContainer>
        <LinkContainer to="/aboutUs">
            <button className="helpAboutUs">About Us</button>
        </LinkContainer>
        </Container>
      ) 
  }

export default HelpPage