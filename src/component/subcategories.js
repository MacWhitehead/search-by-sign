import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { useParams } from "react-router-dom";
import { navData } from "../navData";
import "./subcategories.css"
import {BsSearch} from "react-icons/bs";

const SubcategoriesPage = () => {
  const params = useParams();
  const { category } = params;
  const items = navData[category];
      return(
        <Container className="mainContainer">
          <InputGroup className="mb-3 subCatSearchInputContainer">
                <span className="subCatSearchIcon">
                  <BsSearch />
                </span>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="subCatSearchInput"
              />
          </InputGroup>
          <h2 className="category">{category}</h2>
          <ul>
            {items.map((item)=> {
              return <LinkContainer key={item} to={`/library/${category}/${item}/items`}>
              <li className="subcategories" >{item}</li>
              </LinkContainer>
            })}
          </ul>
        </Container>
      ) 
  }

export default SubcategoriesPage