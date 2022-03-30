import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { navData } from "../navData";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { BsSearch } from "react-icons/bs";
import "./itemsList.css";

const ItemsListPage = (data) => {
  const params = useParams();
  const { category } = params;
  const items = navData[category];
  return (
    <Container className="itemsListContainer">
      <InputGroup className="mb-3 itemsListSearchContainer">
        <span className="itemsListSearchIcon">
          <BsSearch />
        </span>
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          className="itemsListSearchInput"
        />
      </InputGroup>
      <h2 className="itemsListHeader">{category}</h2>
      <ul>
        {items.map((item) => {
          return (
            <LinkContainer key={item} to={`/sign/${item}`}>
              <li className="itemsLI">{item}</li>
            </LinkContainer>
          );
        })}
      </ul>
    </Container>
  );
};

export default ItemsListPage;
