import { useEffect, useCallback } from 'react';
import { Image } from '../../components/game/GamePicture';
import Timer from '../../components/timer/Timer';
import { useDispatch, useSelector } from "react-redux";
import {
  updateRightAnswer, updateAnswerBtns,
  updateCorrectInfo, updateCorrectAnswer,
  openPopup, updateTimerAnimation, updateIsReady, updateAllRoundsData
} from '../../store/slices/gameSlice';
import { updateIsQuitState } from "../../store/slices/popUpSlice";
import { toggleTimerActive } from "../../store/slices/settingSlice"
import { RootState } from "../../store";
import Loader from '../../components/loader/Loader';
import './gamePage.css'
import '../../components/navigation/navigation.css'
import Audio, { AudioType } from 'ts-audio';
import { createAuthorAnswerBtns, createYearAnswerBtns, getTenUniqData, getRusTitle, getTenUniqDataByStyle } from '../../handler/dataWorker';
import { } from '../../handler/dataWorker'
import AnswerBtn from '../../components/button/AnswerBtn';
import PopUp from '../../components/popup/PopUp';
import wrongMusic from '../../sounds/wrong.mp3'
import rightMusic from '../../sounds/right.mp3'
import clickMusic from '../../sounds/click.mp3'
import { pictureJsonType } from '../../model/models';
import { updateActiveGenre } from '../../store/slices/genreSlice';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const tab_btn = 'tab_btn';
  const answered_tab = tab_btn + ' right_answered_tab';

  //game data
  const answerBtns = useSelector<RootState, string[]>((state) => state.game.game.answerBtns);
  const rightAnswerValue = useSelector<RootState, string>((state) => state.game.game.rightAnswer);
  const pictureName = useSelector<RootState, string>((state) => state.game.game.correctInfo.name);
  const image = useSelector<RootState, string>((state) => state.game.game.correctInfo.imageNum);
  const round = useSelector<RootState, number>((state) => state.game.game.round);
  const activeGenre = useSelector<RootState, string>((state) => state.genre.genre.activeGenre);
  const data = useSelector<RootState, pictureJsonType[]>((state) => state.game.game.allRoundsData);

  //config visual
  const showTimer = useSelector<RootState, boolean>((state) => state.settings.setting.showTimer);
  const answerTabs = useSelector<RootState, number[]>((state) => state.game.game.roundTab);
  const popUpIsOpen = useSelector<RootState, boolean>((state) => state.game.game.popUpIsOpen);
  const isReady = useSelector<RootState, boolean>((state) => state.game.game.isReady);

  //music
  const isSound = useSelector<RootState, boolean>((state) => state.settings.setting.isSound);
  const volumeValue = useSelector<RootState, number>((state) => state.settings.setting.volumeRange);

  const exitGameHandler = () => {
    dispatch(toggleTimerActive(false));
    dispatch(updateTimerAnimation('paused'));
    dispatch(updateIsQuitState(true));
    dispatch(openPopup(true));
  }

  useEffect(() => {
    try {
      dispatch(updateCorrectInfo(data[round]))
      if (activeGenre === 'year') {
        const rightYear = data[round].year
        dispatch(updateRightAnswer(rightYear))
        const tempArrBtn = createYearAnswerBtns(rightYear)
        dispatch(updateAnswerBtns(tempArrBtn))
      } else {
        const rightAuthor = data[round].author
        dispatch(updateRightAnswer(rightAuthor))
        const tempArrBtn = createAuthorAnswerBtns(rightAuthor)
        dispatch(updateAnswerBtns(tempArrBtn))
      }

      const timer = setTimeout(() => {
        dispatch(updateIsReady(true))
      }, 420)
      return function cleanUP() {
        clearTimeout(timer);
      }
    } catch (error) {
      const activeGenreLocal = localStorage.getItem('activeGenre');
      const activeData = localStorage.getItem('data')

      if (activeGenreLocal !== null && activeData !== null) {
        const lActiveData = JSON.parse(activeData);
        const lActiveGenre = JSON.parse(activeGenreLocal);
        dispatch(updateActiveGenre(lActiveGenre))
        dispatch(updateAllRoundsData(lActiveData))
        navigate('/categories/game')
      } else {
        navigate('/categories/')
      }
    }

  }, [round, activeGenre, data, dispatch, navigate])



  const getVolumeValue = () => {
    return Number(volumeValue) / 100;
  }

  const playSound = (sound: AudioType) => {
    sound.play();
  }

  //Todo Аудио прототип
  const checkAnswer = (answer: string) => {
    const wrongSound = Audio({
      file: wrongMusic,
      loop: false,
      volume: getVolumeValue(),
      preload: true,
    });
    const rightSound = Audio({
      file: rightMusic,
      loop: false,
      volume: getVolumeValue(),
      preload: true,
    });
    const clickSound = Audio({
      file: clickMusic,
      loop: false,
      volume: getVolumeValue(),
      preload: true,
    });

    playSound(clickSound)
    if (rightAnswerValue === answer) {
      dispatch(updateCorrectAnswer(true));
      if (isSound) {
        playSound(rightSound);
      }

    } else {
      dispatch(updateCorrectAnswer(false));
      if (isSound) {
        playSound(wrongSound);
      }
    }
    if (round <= 9) {
      dispatch(openPopup(true));
    }
  }

  if (!rightAnswerValue) {
    return null;
  }

  return (
    <div className='game' key={round}>
      {
        popUpIsOpen ?
          <PopUp /> : null
      }
      {
        showTimer ?
          <Timer /> :
          <div className='timer_plug close' onClick={exitGameHandler}></div>
      }
      <div className='game_content_wrapper'>
        <div className='game_content'>
          <h3 className='game_question'>{activeGenre === 'artist' ?
            'Кто автор этой Картины?' :
            'В каком году была нарисова эта картина?'}</h3>

          <div className='game_picture_wrapper'>
            <div style={isReady ? { display: 'none' } : { display: 'contents' }} className='loader_wrapper'>
              <Loader />
            </div>
            <Image path={image} alt={pictureName} />
            <div style={isReady ? { opacity: '1' } : { opacity: "0" }}
              className='answer_tabs' >
              {answerTabs.map((el, i) =>
                <div className={el ? answered_tab : tab_btn} key={i + 1}></div>
              )}
            </div>
          </div>
          <div className='answers_btn'>
            {answerBtns.map(el => <AnswerBtn title={el} key={el} onClick={checkAnswer} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage