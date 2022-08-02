import { useEffect } from 'react';
import { Image } from '../components/ui/GamePicture';
import Timer from '../components/ui/Timer'
import { useDispatch, useSelector } from "react-redux";
import { updateRightAnswer, updateAnswerBtns, updateCorrectInfo, updateCorrectAnswer, openPopup } from '../store/slices/gameSlice';
import { toggleTimerActive } from "../store/slices/settingSlice"
import { RootState } from "../store";
import './gamePage.css'
import '../components/navigation.css'
import Audio, { AudioType } from 'ts-audio';
import { get4UniqAuthor, getfilterByAuthorName, get4UniqYear, getfilterByYear }
  from '../handler/handler';
import AnswerBtn from '../components/ui/AnswerBtn';
import PopUp from '../components/ui/popUp/PopUp';
import wrongMusic from '../sounds/wrong.mp3'
import rightMusic from '../sounds/right.mp3'
const GamePage = () => {

  const dispatch = useDispatch();
  const tab_btn = 'tab_btn';
  const answered_tab = tab_btn + ' right_answered_tab';

  const image = useSelector<RootState, string>((state) => state.game.game.correctInfo.imageNum);
  const pictureName = useSelector<RootState, string>((state) => state.game.game.correctInfo.name);
  const answerBtns = useSelector<RootState, string[]>((state) => state.game.game.answerBtns);
  const showTimer = useSelector<RootState, boolean>((state) => state.settings.setting.showTimer);
  const answerTabs = useSelector<RootState, number[]>((state) => state.game.game.roundTab);
  const round = useSelector<RootState, number>((state) => state.game.game.round);
  const rightAnswerValue = useSelector<RootState, string>((state) => state.game.game.rightAnswer);
  const popUpIsOpen = useSelector<RootState, boolean>((state) => state.game.game.popUpIsOpen);
  const activeGenre = useSelector<RootState, string>((state) => state.genre.genre.activeGenre);

  useEffect(() => {
    if (round && activeGenre === 'artist') {
      //!Получаем 4 кнопки с именами авторов и диспатчим кнопки ответов
      const tempArrBtn = [...get4UniqAuthor()]
      dispatch(updateAnswerBtns(tempArrBtn))

      const ranVal = Math.floor(Math.random() * tempArrBtn.length)
      //!Выбираем рандомного автора в качестве правильного ответа и диспатчим данные 
      const tempDataByAuthor = getfilterByAuthorName(tempArrBtn[ranVal])
      const correctAnwser = tempDataByAuthor[0].author
      const correctData = tempDataByAuthor[0];

      dispatch(updateRightAnswer(correctAnwser))
      dispatch(updateCorrectInfo(correctData))
    } else {
      const tempArrBtn = [...get4UniqYear()]
      dispatch(updateAnswerBtns(tempArrBtn))

      const ranVal = Math.floor(Math.random() * tempArrBtn.length)
      //!Выбираем рандомного автора в качестве правильного ответа и диспатчим данные 
      const tempDataByAuthor = getfilterByYear(tempArrBtn[ranVal])
      const correctAnwser = tempDataByAuthor[0].year
      const correctData = tempDataByAuthor[0];

      dispatch(updateRightAnswer(correctAnwser))
      dispatch(updateCorrectInfo(correctData))
    }
  }, [dispatch, round, activeGenre])


  const playSound = (sound: AudioType) => {
    sound.play()
  }

  const checkAnswer = (answer: string) => {
    const wrongSound = Audio({
      file: wrongMusic,
      loop: false,
      volume: 0.6,
      preload: true,
    });
    const rightSound = Audio({
      file: rightMusic,
      loop: false,
      volume: 0.6,
      preload: true,
    })
    dispatch(toggleTimerActive(false));
    if (rightAnswerValue === answer) {
      dispatch(updateCorrectAnswer(true));
      playSound(rightSound)
    } else {
      dispatch(updateCorrectAnswer(false));
      playSound(wrongSound);
    }
    dispatch(openPopup(true));
  }

  if (!rightAnswerValue) {
    return null;
  }

  return (
    <div className='game' key={round}>
      {popUpIsOpen ? <PopUp /> : null}
      {
        showTimer ?
          <Timer /> :
          <div className='timer_plug close'></div>
      }

      <h3 className='game_question'>{activeGenre === 'artist' ?
        'Кто автор этой Картины?' :
        'В каком году была нарисова эта картина?'}</h3>
      <div className='game_picture_wrapper'>
        <Image path={image} alt={pictureName} />
        <div className='answer_tabs'>
          {answerTabs.map((el, i) =>
            <div className={el ? answered_tab : tab_btn} key={i + 1}></div>
          )}
        </div>
      </div>
      <div className='answers_btn'>
        {answerBtns.map(el => <AnswerBtn title={el} key={el} onClick={checkAnswer} />)}
      </div>
    </div>
  )
}

export default GamePage