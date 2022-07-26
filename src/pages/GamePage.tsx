import { Image } from '../components/ui/GamePicture';
import Timer from '../components/ui/Timer'
import { useDispatch, useSelector } from "react-redux";
import { updateAuthor, updateAnswerBtns, updateCorrectInfo, nextRound, resetRound } from '../store/slices/gameSlice';
import { RootState } from "../store";
import './gamePage.css'
import '../components/navigation.css'
import { get4UniqAuthor, getfilterByAuthorName } from '../handler/getUniqueAuthorNames';
import AnswerBtn from '../components/ui/AnswerBtn';
import { dividerClasses } from '@mui/material';



const GamePage = () => {
  const dispatch = useDispatch();

  const tab_btn = 'tab_btn';
  const answered_tab = tab_btn + ' answered_tab';

  // function newGameSession() {
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
  // }

  const image = useSelector<RootState, string>((state) => state.game.game.correctInfo.imageNum);
  const pictureName = useSelector<RootState, string>((state) => state.game.game.correctInfo.name);
  const answerBtns = useSelector<RootState, string[]>((state) => state.game.game.answerBtns);
  const showTimer = useSelector<RootState, boolean>((state) => state.settings.setting.showTimer);

  // newGameSession()
  return (
    <div className='game'>
      {
        showTimer ?
          <Timer /> :
          <div className='timer_plug close'></div>
      }
      <h3 className='game_question'>Who is the author of this picture?</h3>
      <div className='game_picture_wrapper'>
        <Image path={image} alt={pictureName} />
        <div className='right-answer_tab'>
          <div className={answered_tab}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
        </div>
      </div>
      <div className='answers_btn'>
        {answerBtns.map(el => <AnswerBtn title={el} key={el} />)}
      </div>
    </div>
  )
}

export default GamePage