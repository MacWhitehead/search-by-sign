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
import SubcategoryItems from './component/subCategoryItems';
import SignPage from './component/signPage';
import ItemsListPage from './component/itemsList';

//Ask how to add thicker border on navbar, bootstrap may be overriding. 
//Ask about sizing for background with smaller nav bars
//Ask about library page not showing in app area in between nav bars.

//Talk to beth about keeping nav on record sign page.
//Hide contents on record  on record sign page
// https://developers.google.com/web/fundamentals/media/capturing-images#access_the_camera_interactively

function App() {
  return (
    <BrowserRouter className="App">
      <TopNavContainer />
      <Routes >
        <Route exact path="/" element={<RecordSignPage/>}/>
        <Route exact path="/library" element={<LibraryCategoriesPage/>}/>
        <Route path="/library/:category/items" element={<ItemsListPage/>}/>
        <Route  path="/library/:category" element={<SubcategoriesPage />}/>
        <Route  path="/library/:category/:subcategory/items" element={<SubcategoryItems />}/>
        <Route path="/sign/:sign" element={<SignPage />}/>
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
