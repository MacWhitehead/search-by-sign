import React from "react";
import { Container } from "react-bootstrap";

const ItemsListPage = (data) => {
    return(
      <Container className="mainContainer">
        <input placeholder="Search" />
        <ul>
          {data.entries.map((index, key)=> {
            return <li className="categories" key={index}>{key}</li>
          })}
        </ul>
      </Container>
    ) 
}

export default ItemsListPage