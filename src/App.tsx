import { Routes, Route } from 'react-router-dom';
import './App.css';
import GamePage from './pages/gamePage/GamePage';
import MainPage from './pages/mainPage/MainPage';
import SettingPage from './pages/settingPage/SettingPage';
import CategoriesPage from './pages/categoriesPage/CategoriesPage';
import GaleryPage from './pages/galleryPage/GalleryPage';


function App() {

  return (
    <div className='app bg-black mx-auto'>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='setting' element={<SettingPage />} />
        <Route path='categories' element={<CategoriesPage />}></Route>
        <Route path='gallery' element={<GaleryPage />}></Route>
        <Route path='/categories/game' element={<GamePage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
