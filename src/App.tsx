import { Routes, Route } from 'react-router-dom';
import './App.css';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import SettingPage from './pages/SettingPage';
import CategoriesPage from './pages/CategoriesPage';


function App() {
  return (
    <div className='bg-black mx-auto'>
      <div className="max-w-7xl mx-auto min-h-screen">
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='setting' element={<SettingPage />} />
          <Route path='categories' element={<CategoriesPage />}></Route>
          <Route path='/categories/game' element={<GamePage />} ></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
