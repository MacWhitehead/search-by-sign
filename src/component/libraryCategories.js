import React from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./library.css"

// const categoriesList = {
//   Category: {
//     svg: <svg><circle style={{fill: '#0e4f7d'}} cx="7.07" cy="10.99" r="2.34"/></svg>,
//     items: {
//       "Sub-Category": {
//         items: []
//       }
//     },
//         items: [
//           {title: "Sub-Sub-Category", items: [{title: "Sub-Sub-Sub-Category"}, {title: "Sub-Sub-Sub-Category2"}]}
//         ]
//       }
//   }
// }


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
              return (
              <LinkContainer to={`/library/${item}`}>
                <li className="categories" key={index} props={item}>{item}</li>
              </LinkContainer>
              )
            })}
          </ul>
        </Container>
      ) 
  }

export default LibraryCategoriesPage