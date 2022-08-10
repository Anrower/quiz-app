import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import Footer from '../../components/footer/Footer';
import './mainPage.css';
import Audio from 'ts-audio';
import { useSelector } from 'react-redux';
import { RootState } from "../../store";
import clickSound from '../../sounds/click.mp3'


const MainPage = () => {
  const volumeValue = useSelector<RootState, number>((state) => state.settings.setting.volumeRange);

  const playClick = () => {

    const getVolumeValue = () => {
      return Number(volumeValue) / 100
    }

    const sound = Audio({
      file: clickSound,
      loop: false,
      volume: getVolumeValue(),
      preload: true,
    });
    sound.play()
  }

  return (
    <div className="mainPage">
      <div className='mainPage__content'>
        < Navigation context={'mainPage'} />
        <h1 className='main_text font-bold text-9xl leading-normal text-white text-center mt-60
      '>Art Quiz</h1>
        <div className='main_button flex items-center mx-auto justify-center mt-40'>
          <Link to='categories'>
            <PrimaryBtn title='Начать' classes={''} onClick={playClick} />
          </Link>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default MainPage