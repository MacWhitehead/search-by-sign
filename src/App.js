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


function App() {
  return (
    <BrowserRouter className="App">
      <TopNavContainer />
      <Routes >
        <Route exact path="/" element={<RecordSignPage/>}/>
        <Route exact path="/library" element={<LibraryCategoriesPage/>}/>
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
