import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import PrimaryBtn from '../components/ui/PrimaryBtn';
import './mainPage.css';

const MainPage = () => {
  return (
    <div
      className="mainPage"
    >
      < Navigation context={'mainPage'} />
      <h1 className='font-bold text-9xl leading-normal text-white text-center mt-60
      '>Art Quiz</h1>
      <div className='flex items-center mx-auto justify-center mt-40'>
        <Link to='categories'>
          <PrimaryBtn title='Начать Викторину' classes={''} />
        </Link>
      </div>
    </div >
  )
}

export default MainPage