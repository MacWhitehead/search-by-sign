import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { useParams } from "react-router-dom";
import { navData } from "../navData";
import "./subcategoryItems.css"
import {BsSearch} from "react-icons/bs";

const SubCategoryItems = () => {
  const params = useParams();
  const { category, subcategory } = params;
  const items = navData[subcategory];
      return(
        <Container className="mainContainer">
          <InputGroup className="mb-3 catItemsSearchInputContainer">
                <span className="catItemsSearchIcon">
                  <BsSearch />
                </span>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="catItemsSearchInput"
              />
          </InputGroup>
          <h2 className="subcategoryHeader">{subcategory}</h2>
          <ul>
            {items?.map((item)=> {
              return <LinkContainer key={item} to={`/sign/${item}`}>

              <li className="categoryItems" >{item}</li>
              </LinkContainer>
            })}
          </ul>
        </Container>
      ) 
  }

export default SubCategoryItems;