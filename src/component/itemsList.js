import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { navData } from "../navData";
import LinkContainer from "react-router-bootstrap/LinkContainer";

const ItemsListPage = (data) => {
  const params = useParams();
  const { category } = params;
  const items = navData[category];
    return(
      <Container className="mainContainer">
        <input placeholder="Search" />
        <h2>{category}</h2>
        <ul>
          {items.entries.map((item)=> {
            return <LinkContainer key={item} to={`/library/${category}`}>
              <li className="category-list" >{item}</li>
              </LinkContainer>
          })}
        </ul>
      </Container>



    ) 
}

export default ItemsListPage