import React from "react";

const CategoryItemsPage = () => {
  const params = useParams();
  const { category } = params;
  const items = navData[category];
      return(
        <Container className="mainContainer">
          <input placeholder="Search" className="searchInput" />
          <h2>{category}</h2>
          <ul>
            {items.map((item)=> {
              return <LinkContainer key={item} to={`/library/${category}/${item}/items`}>

              <li className="sub-categories" >{item}</li>
              </LinkContainer>
            })}
          </ul>
        </Container>
      ) 
  }


export default CategoryItemsPage