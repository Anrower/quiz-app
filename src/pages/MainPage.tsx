import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import PrimaryBtn from '../components/ui/PrimaryBtn';
import './mainPage.css';

const MainPage = () => {
  return (
    <div className="mainPage">
      < Navigation context={'mainPage'} />
      <h1 className='main_text font-bold text-9xl leading-normal text-white text-center mt-60
      '>Art Quiz</h1>
      <div className='main_button flex items-center mx-auto justify-center mt-40'>
        <Link to='categories'>
          <PrimaryBtn title='Начать' classes={''} />
        </Link>
      </div>
    </div >
  )
}

export default MainPage