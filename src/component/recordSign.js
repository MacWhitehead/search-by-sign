import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./recordSign.css"

const RecordSignPage = () => {
      return(
        <div className="appContainer">
          <p className="header">Tap to record and search your sign!</p>
          <LinkContainer to="/resultFound">
            <svg 
              className="recordingSvg"
              id="Layer_1" 
              data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 18.16 18.16">
              <circle style={{fill:'#e8f3f9'}} cx="9.08" cy="9.08" r="8.19"/>
              <path style={{fill:'#5eb9cd'}}
              d="M10.27,1a9.08,9.08,0,1,0,9.08,9.08A9.09,9.09,0,0,0,10.27,1Zm0,16.75a7.67,7.67,0,1,1,7.67-7.67A7.66,7.66,0,0,1,10.27,17.73Z" 
              transform="translate(-1.19 -0.98)"/>
              <rect style={{fill: "#d97973"}} x="5.23" y="5" width="7.7" height="7.7" rx="1.12"/>
            </svg>
          </LinkContainer>
        </div>
      ) 
  }

export default RecordSignPage