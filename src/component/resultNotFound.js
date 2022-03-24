import React from "react";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

const ResultNotFoundPage = () => {
      return(
        <>
        <div>Result not found, send us your sign button</div>
        <LinkContainer to="/sendUsYourSign">
          <Button >Send us your sign</Button>
        </LinkContainer>
        </>
      ) 
  }

export default ResultNotFoundPage