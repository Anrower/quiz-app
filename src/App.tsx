import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
