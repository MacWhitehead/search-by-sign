import React from "react";
import { Container } from "react-bootstrap";
import "./library.css"

// Ask how to render the key as a header and items as LI
// Ask if possible to combine and have main categories in this 
//page as well
//Ask about rendering SVG per category item 
// Ask for help with the SVG's and why they won't work in navbar
//Issue on main recordidng page with height. 

const subCategories = {
  Food: {
    Fruit: [
      "Apple", 
      "Banana", 
      "Strawberry", 
      "Cherry", 
      "Orange", 
      "Pineapple", 
      "Grapes", 
      "Tomato"
     ], 
     Vegetables: [
       "Onion", 
       "Potato", 
       "Lettuce", 
       "Corn", 
       "Carrot"
     ], 
     Desserts: [
       "Ice Cream", 
       "Cake", 
       "Cookie", 
       "Pie", ,
       "Chocolate", 
       "Gum"
     ], 
     Dairy: [
       "Milk", 
       "Cheese", 
       "Butter", 
       "Egg", 
       "Yogurt"
     ], 
     Other: [
       "Bread", 
       "Meat", 
       "Fish", 
       "Pasta", 
       "Rice", 
       "Pancakes", 
       "Pizza", 
       "Hot Dog"
     ]
  },
  Colors: [
    "Grey",  
    "Blue", 
    "Pink", 
    "Red", 
    "Orange", 
    "Black", 
    "White", 
    "Green", 
    "Purple", 
    "Yellow"
  ], 
  SchoolSubjects: [
    "Math", 
    "Science", 
    "Philosophy", 
    "Psychology", 
    "Art", 
    "Theater", 
    "Dance", 
    "Literature", 
    "English", 
  ], 
  Animals: [
    "Dog", 
    "Cat", 
    "Bear", 
    "Lion", 
    "Snake", 
    "Tiger", 
    "Shark", 
    "Fish", 
    "Monkey", 
  ], 
  Insects: [
    "Bug", 
    "Butterfly", 
    "Spider", 
    "Bee", 
    "Ant", 
    "Caterpillar"
  ], 
  Slang: [
    "What's up?", 
    "Awesome/Amazing", 
    "Wow", 
    "Cool (2 versions)"
  ], 
  InterrogativeWords: [
    "Who", 
    "What", 
    "When", 
    "Where", 
    "How", 
    "Why", 
    "Many", 
    "Much", 
    "Which"
  ], 
  TimeMarkers: [
    "Time", 
    "Hour", 
    "Minute", 
    "Year", 
    "Month", 
    "Day", 
    "Week", 
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ], 
  PersonalPronounsAndPossesives: [
    "I/Me", 
    "You/He/Him/She/Her", 
    "We", 
    "They/Them", 
    "Mine", 
    "Hers/His/Their/Your/Yours", 
    "Our"
  ], 
  ReligiousEcclesiastical: {
    LDS: [
      "Baptism", 
      "Priest", 
      "Bishop", 
      "God", 
      "Jesus Christ", 
      "Preach", 
      "Prophet", 
      "Heaven", 
      "Hell", 
      "Blessing", 
      "Sacrament", 
      "Priesthood", 
      "Angel", 
    ], 
    Catholic: [
      "Baptism", 
      "Priest", 
      "Penance (Confession)", 
      "Confirmation",
      "Ordination", 
      "Extreme Unction (Last Rites)", 
      "Holy Communion", 
      "Bishop", 
      "Archbishop", 
    ], 
    Jewish: [
      "Isreal", 
      "Synagogue", 
      "Circumcision", 
      "Chazzan/Cantor", 
      "Commandments", 
      "Abraham", 
      "Rabbi", 
      "Torah Scrolls", 
      "Prayer"
    ], 
    Christian: [
      "Prophet", 
      "Priest", 
      "Preach", 
      "Scripture", 
      "Apostle", 
      "Atonement", 
      "Cross", 
      "Forgiveness"
    ]
  }, 
  Holidays: [
    "Christmas", 
    "Hannukah", 
    "Easter", 
    "Fourth of July/Independence Day", 
    "Thanksgiving", 
    "Halloween", 
    "New Years"
  ], 
  Hobbies: [
    "Dance", 
    "Painting", 
    "Hike", 
    "Reading", 
    "Travelling",
    "Fishing", 
    "Watching TV", 
    "Bird Watching"
  ], 
  Family: [
    "Mother", 
    "Father", 
    "Brother", 
    "Sister", 
    "Son", 
    "Daughter", 
    "Grandma", 
    "Grandpa"
  ], 
  Greetings: [
    "Hello", 
    "My name is...", 
    "How are you?", 
    "Nice to meet you", 
    "Good morning/Afternoon/Evening", 
  ]

}

const SubcategoriesPage = () => {
      return(
        <Container className="mainContainer">
          <input placeholder="Search" />
          <ul>
            {subCategories.entries.map((index, key)=> {
              return <li className="categories" key={index}>{key}</li>
            })}
          </ul>
        </Container>
      ) 
  }

export default SubcategoriesPage