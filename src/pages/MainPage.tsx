import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import PrimaryBtn from '../components/ui/PrimaryBtn';
import './s.css';

const MainPage = () => {
  return (
    <div
      className="mainPage"
    >
      < Navigation />
      <h1 className='font-bold text-9xl leading-normal text-white text-center mt-60
      '>Art Quiz</h1>
      <div className='flex items-center mx-auto justify-center mt-40'>
        <Link to='game'>
          <PrimaryBtn title='Start Quiz' classes={''} />
        </Link>
      </div>
    </div >
  )
}

export default MainPage