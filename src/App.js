import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecordSignPage from './component/recordSign';
import TopNavContainer from './component/topNav';
import BottonNavContainer from './component/bottomNav';
import LibraryCategoriesPage from "./component/libraryCategories"
import SignOfTheDayPage from './component/signOfTheDay';
import HelpPage from './component/help';
import SendUsYourSignPage from './component/sendUsYourSign';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultNotFoundPage from './component/resultNotFound';
import SubcategoriesPage from './component/subcategories';
import SignPage from './component/signPage';
import ItemsListPage from './component/itemsList';

//Ask how to add thicker border on navbar, bootstrap may be overriding. 
//Ask how to not display nav bar on record sign page
//Ask about sizing for background with smaller nav bars
//Ask about library page not showing in app area in between nav bars.

const data = {
  Food: [
    "Fruit",
    "Veggetables",
    "Desserts", 
    "Dairy", 
    "Other"
    ], 
    Fruits: [
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
        "Pie", 
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
      };

function App() {
  return (
    <BrowserRouter className="App">
      <TopNavContainer />
      <Routes >
        <Route exact path="/" element={<RecordSignPage/>}/>
        <Route exact path="/library" element={<LibraryCategoriesPage/>}/>
        <Route exact path="/library/food" element={<SubcategoriesPage items={data.Food}/>}/>
        <Route exact path="/library/food/desserts" element={<SubcategoriesPage items={data.Desserts}/>}/>
        <Route exact path="/library/food/fruits" element={<ItemsListPage items={data.Fruits}/>}/>
        <Route exact path="/library/food/fruits/orange" element={<SignPage item="Orange"/>}/>
        <Route exact path="/signOfTheDay" element={<SignOfTheDayPage/>}/>
        <Route exact path="/help" element={<HelpPage/>}/>
        <Route path="/sendUsYourSign" element={<SendUsYourSignPage />}/>
        <Route path="/resultNotFound" element={<ResultNotFoundPage />}/>
      </Routes>
      <BottonNavContainer />
    </BrowserRouter>
  );
}

export default App;
