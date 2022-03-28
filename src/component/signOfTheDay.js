import React from "react";
import { Container } from "react-bootstrap";
import "./signOfTheDay.css"

const SignOfTheDayPage = () => {
      return(
        <Container className="SODContainer">
          <h6 className="SODBanner">Sign of the Day!</h6>
          <video className="SODVideo" controls={true} width="100%" height="100%"
            src="https://www.youtube.com/watch?v=i74fcOMeN8E">
          </video>
          {/* Would need to add dynamic programming for the sign of the day here, 
          hard coded for now */}
          <p className="SODItemName">Apple</p>
          <p className="SODItemDescription">The fruit of a tree of the rose family, typically
          has thin red or green skin and crisp flesh</p>
        </Container>
      ) 
  }

export default SignOfTheDayPage