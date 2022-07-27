import { useEffect } from 'react';
import { Image } from '../components/ui/GamePicture';
import Timer from '../components/ui/Timer'
import { useDispatch, useSelector } from "react-redux";
import { updateAuthor, updateAnswerBtns, updateCorrectInfo, updateCorrectAnswer, openPopup, updateTimerAnimation } from '../store/slices/gameSlice';
import { toggleTimerActive, updateTimerCurrentSec } from "../store/slices/settingSlice"
import { RootState } from "../store";
import './gamePage.css'
import '../components/navigation.css'
import { get4UniqAuthor, getfilterByAuthorName } from '../handler/handler';
import AnswerBtn from '../components/ui/AnswerBtn';
import PopUp from '../components/ui/popUp/PopUp';

const GamePage = () => {

  const dispatch = useDispatch();
  const tab_btn = 'tab_btn';
  const answered_tab = tab_btn + ' right_answered_tab';

  useEffect(() => {
    //!Получаем 4 кнопки с именами авторов и диспатчим кнопки ответов
    const tempArrBtn = [...get4UniqAuthor()]
    dispatch(updateAnswerBtns(tempArrBtn))

    const ranVal = Math.floor(Math.random() * tempArrBtn.length)
    //!Выбираем рандомного автора в качестве правильного ответа и диспатчим данные 
    const tempDataByAuthor = getfilterByAuthorName(tempArrBtn[ranVal])
    const correctAnwser = tempDataByAuthor[0].author
    const correctData = tempDataByAuthor[0];

    dispatch(updateAuthor(correctAnwser))
    dispatch(updateCorrectInfo(correctData))
  }, [dispatch])

  const image = useSelector<RootState, string>((state) => state.game.game.correctInfo.imageNum);
  const pictureName = useSelector<RootState, string>((state) => state.game.game.correctInfo.name);
  const answerBtns = useSelector<RootState, string[]>((state) => state.game.game.answerBtns);
  const showTimer = useSelector<RootState, boolean>((state) => state.settings.setting.showTimer);
  const answerTabs = useSelector<RootState, number[]>((state) => state.game.game.roundTab);
  const round = useSelector<RootState, number>((state) => state.game.game.round);
  const rightAnswerValue = useSelector<RootState, string>((state) => state.game.game.author);
  const popUpIsOpen = useSelector<RootState, boolean>((state) => state.game.game.popUpIsOpen);
  const timerAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);

  useEffect(() => {
    if (round > 1) {

      dispatch(updateTimerCurrentSec(timerAnswerValue))
      dispatch(updateTimerAnimation('running'))
      dispatch(toggleTimerActive(true))

      const tempArrBtn = [...get4UniqAuthor()]
      dispatch(updateAnswerBtns(tempArrBtn))

      const ranVal = Math.floor(Math.random() * tempArrBtn.length)
      //!Выбираем рандомного автора в качестве правильного ответа и диспатчим данные 
      const tempDataByAuthor = getfilterByAuthorName(tempArrBtn[ranVal])
      const correctAnwser = tempDataByAuthor[0].author
      const correctData = tempDataByAuthor[0];

      dispatch(updateAuthor(correctAnwser))
      dispatch(updateCorrectInfo(correctData))
    }
  }, [round, dispatch, timerAnswerValue])


  const checkAnswer = (answer: string | null) => {
    dispatch(toggleTimerActive(false));

    if (rightAnswerValue === answer) {
      dispatch(updateCorrectAnswer(true));
    } else {
      dispatch(updateCorrectAnswer(false));
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
      <h3 className='game_question'>Who is the author of this picture?</h3>
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