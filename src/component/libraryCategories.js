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
  {title: "Food", svg: <svg></svg>, hasSubcategories: true},
  {title: "Colors", svg: <svg></svg>, hasSubcategories: false},
  {title: "School Subjects", svg: <svg></svg>, hasSubcategories: false},
  {title: "Animals", svg: <svg></svg>, hasSubcategories: false},
  {title: "Insects", svg: <svg></svg>, hasSubcategories: false},
  {title: "Common Slang", svg: <svg></svg>, hasSubcategories: false},
  {title: "Interrogative Words", svg: <svg></svg>, hasSubcategories: false},
  {title: "Time Markers", svg: <svg></svg>, hasSubcategories: false},
  {title: "Personal Pronouns & Possesives", svg: <svg></svg>, hasSubcategories: false},
  {title: "Religious/Ecllesiastical", svg: <svg></svg>, hasSubcategories: true},
  {title: "Holidays", svg: <svg></svg>, hasSubcategories: false},
  {title: "Hobbies", svg: <svg></svg>, hasSubcategories: false},
  {title: "Families", svg: <svg></svg>, hasSubcategories: false},
  {title: "Greetings", svg: <svg></svg>, hasSubcategories: false},
]

const LibraryCategoriesPage = () => {
      return(
        <Container className="mainContainer">
          <input className="searchInput" placeholder="Search" />
          <ul>
            {categories.map((item, index)=> {
              return (
              <LinkContainer key={index} to={`/library/${item?.title ? item.title : item}${item.hasSubcategories ? '': '/items'}`}>
                <li className="categories">{item?.title ? item.title: item}</li>
              </LinkContainer>
              )
            })}
          </ul>
        </Container>
      ) 
  }

export default LibraryCategoriesPage