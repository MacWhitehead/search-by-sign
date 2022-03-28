import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./library.css"
import {BsSearch} from "react-icons/bs";

const categories = [
  {title: "Food", hasSubcategories: true},
  {title: "Colors", hasSubcategories: false},
  {title: "School Subjects", hasSubcategories: false},
  {title: "Animals", hasSubcategories: false},
  {title: "Insects", hasSubcategories: false},
  {title: "Common Slang", hasSubcategories: false},
  {title: "Interrogative Words", hasSubcategories: false},
  {title: "Time Markers", hasSubcategories: false},
  {title: "Personal Pronouns & Possesives", hasSubcategories: false},
  {title: "Religious/Ecllesiastical", hasSubcategories: true},
  {title: "Holidays", hasSubcategories: false},
  {title: "Hobbies", hasSubcategories: false},
  {title: "Families", hasSubcategories: false},
  {title: "Greetings", hasSubcategories: false},
]

const LibraryCategoriesPage = () => {
      return(
        <Container className="libraryContainer">
          <InputGroup className="mb-3 librarySearchInputContainer">
                <span className="librarySearchIcon">
                  <BsSearch />
                </span>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="librarySearchInput"
              />
          </InputGroup>
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