import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import Footer from '../../components/footer/Footer';
import './mainPage.css';
import Audio from 'ts-audio';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store";
import clickSound from '../../sounds/click.mp3'
import { updateGameType } from '../../store/slices/settingSlice';


const MainPage = () => {
  const dispatch = useDispatch();
  const volumeValue = useSelector<RootState, number>((state) => state.settings.setting.volumeRange);

  const byPictures = () => {
    dispatch(updateGameType('byPictures'));
    localStorage.setItem('gameType', 'byPictures');
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

  const byArtist = () => {
    dispatch(updateGameType('byArtist'));
    localStorage.setItem('gameType', 'byArtist');
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
        <div className='main_button flex items-center mx-auto justify-center gap-4 mt-40'>
          <Link to='categories'>
            <PrimaryBtn title='По Художникам' classes={''} onClick={byArtist} />
          </Link>
          <Link to='categories'>
            <PrimaryBtn title='По Картинам' classes={''} onClick={byPictures} />
          </Link>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default MainPage