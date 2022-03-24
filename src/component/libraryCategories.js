import React from "react";
import { Container } from "react-bootstrap";
import "./library.css"

const categories = [
  "Food",
  "Colors",
  "School Subjects", 
  "Animals", 
  "Insects",
  "Common Slang",
  "Interrogative Words",
  "Time Markers", 
  "Personal Pronouns & Possesives", 
  "Religious/Ecllesiastical", 
  "Holidays",
  "Hobbies", 
  "Families",
  "Greetings", 
]

const LibraryCategoriesPage = () => {
      return(
        <Container className="mainContainer">
          <input placeholder="Search" />
          <ul>
            {categories.map((item, index)=> {
              return <li className="categories" key={index}>{item}</li>
            })}
          </ul>
        </Container>
      ) 
  }

export default LibraryCategoriesPage