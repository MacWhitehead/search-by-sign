import React from "react";
import { Container, Form } from "react-bootstrap";
import "./settings.css"

const SettingsPage = () => {
      return(
        <Container className="settingsContainer">
          <h6 className="settingsHeader">Settings</h6> 
          <Form className="settingsNotificationContainer">
          <p className="settingsNotifications">Notifications</p>
            <Form.Check 
              type="switch"
              id="custom-switch"
            />
          </Form>
          <div className="settingsDisplayContainer">
            <p className="settingsHeaders">Display</p>
            <div className="settingsOptions">
              <p>Theme(Light/Dark)</p>
              <p>Choose Color Theme</p>
              <p>Text Style</p>
            </div>
          </div>
          <div>
            <p className="settingsHeaders">More</p>
            <div className="settingsOptions">
              <p>Language</p>
              <p>Country</p>
            </div>
          </div>
        </Container>
      ) 
  }

export default SettingsPage