import { useEffect } from 'react';
import { Image } from '../components/ui/GamePicture';
import Timer from '../components/ui/Timer'
import { useDispatch, useSelector } from "react-redux";
import {
  updateRightAnswer, updateAnswerBtns,
  updateCorrectInfo, updateCorrectAnswer,
  openPopup, updateTimerAnimation, updateIsReady, updateLastTab,

} from '../store/slices/gameSlice';
import { updateIsQuitState } from "../store/slices/popUpSlice";
import { toggleTimerActive } from "../store/slices/settingSlice"
import { RootState } from "../store";
import Loader from '../components/ui/loader/Loader';
import './gamePage.css'
import '../components/navigation.css'
import Audio, { AudioType } from 'ts-audio';
import { getTenUniqData, createAuthorAnswerBtns } from '../handler/dataWorker';
import { get4UniqAuthor, getfilterByAuthorName, get4UniqYear, getfilterByYear }
  from '../handler/handler';
import { } from '../handler/dataWorker'
import AnswerBtn from '../components/ui/AnswerBtn';
import PopUp from '../components/ui/popup/PopUp';
import wrongMusic from '../sounds/wrong.mp3'
import rightMusic from '../sounds/right.mp3'
import clickMusic from '../sounds/click.mp3'
import { pictureJsonType } from '../model/models';


const GamePage = () => {

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
  const volumeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);

  useEffect(() => {

    if (activeGenre === 'artist') {
      dispatch(updateCorrectInfo(data[round]))
      const rightAuthor = data[round].author
      dispatch(updateRightAnswer(rightAuthor))
      const tempArrBtn = createAuthorAnswerBtns(rightAuthor)
      console.log(tempArrBtn);
      dispatch(updateAnswerBtns(tempArrBtn))


    } else {
      // const tempArrBtn = [...get4UniqYear()]
      // dispatch(updateAnswerBtns(tempArrBtn))
      // const ranVal = Math.floor(Math.random() * tempArrBtn.length)
      // const tempDataByAuthor = getfilterByYear(tempArrBtn[ranVal])
      // const correctAnwser = tempDataByAuthor[0].year
      // const correctData = tempDataByAuthor[0];
      // dispatch(updateRightAnswer(correctAnwser))
      // dispatch(updateCorrectInfo(correctData))
    }

    setTimeout(() => {
      dispatch(updateIsReady(true))
    }, 420)
  }, [dispatch, round, activeGenre, data])

  const exitGameHandler = () => {
    dispatch(toggleTimerActive(false))
    dispatch(updateTimerAnimation('paused'))
    dispatch(updateIsQuitState(true))
    dispatch(openPopup(true))
  }

  const getVolumeValue = () => {
    return Number(volumeValue) / 100
  }

  const playSound = (sound: AudioType) => {
    sound.play()
  }

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
    })
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
        playSound(rightSound)
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