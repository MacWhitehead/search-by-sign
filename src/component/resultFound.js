import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";
import "./resultFound.css";

const ResultFoundPage = () => {
  return (
    <Container className="resultFoundContainer">
      <InputGroup className="mb-3 foundResultSearchInputContainer">
        <span className="foundResultSearchIcon">
          <BsSearch />
        </span>
        <FormControl
          aria-label="Search"
          aria-describedby="basic-addon1"
          className="foundResultSearchInput"
        />
      </InputGroup>
      <h6 className="foundResultsHeader">Top Results</h6>
      <div className="foundResultsContainer">
        <video
          className="foundResultsVideo"
          controls={true}
          width="30%"
          height="30%"
          src="https://www.youtube.com/watch?v=i74fcOMeN8E"
        ></video>
        <LinkContainer to="/sign/apple">
          <p className="resultFoundItemName">Apple</p>
        </LinkContainer>
      </div>
    </Container>
  );
};

export default ResultFoundPage;
