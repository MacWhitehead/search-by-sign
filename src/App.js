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
import SubcategoriesPage from './component/subcategories';
import SubcategoryItems from './component/subCategoryItems';
import SignPage from './component/signPage';
import ItemsListPage from './component/itemsList';
import AboutUsPage from './component/aboutUs';
import ConfirmSubmitPage from './component/confirmSubmit';
import ResultFoundPage from './component/resultFound';

//Ask how to add thicker border on navbar, bootstrap may be overriding. 
//Issue with categories that go straight to items instead of subcat

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
        <Route path="/resultFound" element={<ResultFoundPage />}/>
        <Route path="/aboutUs" element={<AboutUsPage />}/>
        <Route path="/confirmSubmit" element={<ConfirmSubmitPage />}/>
      </Routes>
      <BottonNavContainer />
    </BrowserRouter>
  );
}

export default App;
