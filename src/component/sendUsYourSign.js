import React from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./sendUsYourSign.css";

const SendUsYourSignPage = () => {
  let [hidden, setHidden] = React.useState(false);
  const hideSubmitContainer = (event) => {
    if (event.type === "click") {
      if (hidden === true) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    }
  };
  return (
    <Container className="sendSignContainer">
      <p className="sendSignHeader">
        We are constantly working to add to our dictionary
      </p>
      <p className="sendSignHeader">
        We would love to help answer your question and get your sign added for
        future users!{" "}
      </p>
      <div className="submitSignEmailContainer">
        <input
          type="email"
          className="sendSignEmail"
          placeholder="Enter your email"
        />
      </div>
      <div className="sendSignInfo">
        <p className="sendSignInfoText">Record your sign below</p>
        <p>Include any helpful context</p>
      </div>
      <div className="submitSignRecord">
        {hidden ? (
          ""
        ) : (
          <div className="submitSignSubmitContainer">
            <p className="submitSignHeader">Submit?</p>
            <button
              className="submitSignButton"
              onClick={(event) => hideSubmitContainer(event)}
            >
              No
            </button>
            <LinkContainer to="/confirmSubmit">
              <button className="submitSignButton">Yes</button>
            </LinkContainer>
          </div>
        )}
        <svg
          role="button"
          onClick={(event) => hideSubmitContainer(event)}
          className="sendSignRecord"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.16 18.16"
        >
          <circle style={{ fill: "#cae7eb" }} cx="9.08" cy="9.08" r="8.19" />
          <path
            style={{ fill: "#0e4e7c" }}
            d="M10.27,1a9.08,9.08,0,1,0,9.08,9.08A9.09,9.09,0,0,0,10.27,1Zm0,16.75a7.67,7.67,0,1,1,7.67-7.67A7.66,7.66,0,0,1,10.27,17.73Z"
            transform="translate(-1.19 -0.98)"
          />
          <rect
            style={{ fill: "#d97973" }}
            x="5.23"
            y="5"
            width="7.7"
            height="7.7"
            rx="1.12"
          />
        </svg>
      </div>
    </Container>
  );
};

export default SendUsYourSignPage;
