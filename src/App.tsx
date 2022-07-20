import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import SettingPage from './pages/SettingPage';
import CategoriesPage from './pages/CategoriesPage';


function App() {
  return (
    <div className='bg-black mx-auto'>
      <div className="max-w-7xl mx-auto min-h-screen">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='categories' element={<CategoriesPage />} />
          <Route path='auth' element={<AuthPage />} />
          <Route path='setting' element={<SettingPage />} />
          <Route path='game' element={<GamePage />} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
