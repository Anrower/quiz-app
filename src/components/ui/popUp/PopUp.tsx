import { useNavigate } from 'react-router-dom';
import './popUp.css'
import { Image } from '../GamePicture'
import PrimaryBtn from '../PrimaryBtn'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { nextRound, openPopup, updateTimerAnimation, updateRoundAnswer, resetRound } from '../../../store/slices/gameSlice';
import { toggleTimerActive, updateTimerCurrentSec } from '../../../store/slices/settingSlice';
import { updateResulText, updateResultAnswer, updateIsQuitState } from '../../../store/slices/popUpSlice';
import { updateGenreStat } from '../../../store/slices/genreSlice';
import grandResult_img from "../../../images/ui_styles/grand_result.svg"
import gameOver_img from "../../../images/ui_styles/game_over.svg"
import congrats_img from "../../../images/ui_styles/congratulations.svg"
import { useEffect } from 'react';

const PopUp = () => {
  // return null
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const round = useSelector<RootState, number>((state) => state.game.game.round);
  const timerAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const imageNum = useSelector<RootState, string>((state) => state.game.game.correctInfo.imageNum);
  const pictureName = useSelector<RootState, string>((state) => state.game.game.correctInfo.name);
  const author = useSelector<RootState, string>((state) => state.game.game.correctInfo.author);
  const year = useSelector<RootState, string>((state) => state.game.game.correctInfo.year);
  const isCorrect = useSelector<RootState, boolean>((state) => state.game.game.isCorrectAnswer);
  const roundAnswers = useSelector<RootState, boolean[]>((state) => state.game.game.roundAnswers);
  const resultText = useSelector<RootState, string>((state) => state.popup.popUp.resultText);
  const resultAnswer = useSelector<RootState, string | JSX.Element>((state) => state.popup.popUp.resultAnswer);
  const activeGenre = useSelector<RootState, string>((state) => state.genre.genre.activeGenre);
  const isQuitState = useSelector<RootState, boolean>((state) => state.popup.popUp.isQuit);

  let genreStat = useSelector<RootState, object>((state) => state.genre.genre.genreStat);

  useEffect(() => {
    dispatch(updateRoundAnswer(isCorrect))
  }, [dispatch, isCorrect])

  const wrongStyle = 'pop-up_answer-indicator  pop-up_wrong-answer'
  const rightStyle = 'pop-up_answer-indicator pop-up_right-answer'

  const clickNext = () => {
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(nextRound())
  }

  const playAgainYes = () => {
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound())
  }

  const playAgainNo = () => {
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound())
    navigate('/')
  }

  const playNextQuiz = () => {
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound())
    navigate('/categories')
  }

  const quitNoHandler = () => {
    dispatch(openPopup(false))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(updateIsQuitState(false))
  }

  const quitYesHandler = () => {
    playAgainNo()
    dispatch(updateIsQuitState(false))
  }

  const rightAnswerCount = roundAnswers.map((el) => el ? 1 : 0)
    .reduce<number>((acc, cur) => acc + cur, 0);

  const updateGenStat = () => {
    type ObjectKey = keyof typeof genreStat;
    const genreStatResult = {
      ...genreStat, [activeGenre as ObjectKey]: rightAnswerCount
    }
    dispatch(updateGenreStat(genreStatResult))
    return
  }

  useEffect(() => {
    if (round === 10) {
      updateGenStat()
      switch (rightAnswerCount) {
        case 10:
          dispatch(updateResulText('Grand result'))
          dispatch(updateResultAnswer('Congratsulations'))
          return
        case 0:
          dispatch(updateResulText('Game over'))
          dispatch(updateResultAnswer('Play agin?'))
          return
        default:
          dispatch(updateResulText('Congratulations!'))
          dispatch(updateResultAnswer(`${rightAnswerCount}`))
          return
      }
    }

  }, [round])

  return (
    <div className='pop-up'>
      <div className='pop-up_body'>
        {round === 10 ?
          <>
            <div className='pop-up_image_wrapper'>
              <img
                className='pop-up_result-img'
                src={rightAnswerCount === 0 ?
                  gameOver_img :
                  rightAnswerCount === 10 ?
                    grandResult_img :
                    congrats_img}
                alt={resultText} />
            </div>
            <h3 className='pop-up_result_image-name'>{resultText}</h3>
            <p className='pop-up_result_image-info'>
              {rightAnswerCount === 0 ?
                resultAnswer :
                rightAnswerCount === 10 ?
                  resultAnswer :
                  <span >{resultAnswer}/10</span>
              }
            </p>
            <div className='pop-up_result_btn-wrapper'>
              {rightAnswerCount === 0 ?
                <>
                  <PrimaryBtn title='Нет' classes='pop-up_btn pop-up_btn-short' onClick={playAgainNo} />
                  <PrimaryBtn title='Да' classes='pop-up_btn pop-up_btn-short pop-up_btn_active' onClick={playAgainYes} />
                </> :
                rightAnswerCount === 10 ?
                  <>
                    <PrimaryBtn title='Дальше' classes='pop-up_btn pop-up_btn_active' onClick={playNextQuiz} />
                  </> :
                  <>
                    <PrimaryBtn title='Домой' classes='pop-up_btn pop-up_btn-short' onClick={playAgainNo} />
                    <PrimaryBtn title='Категории' classes='pop-up_btn pop-up_btn-short pop-up_btn_active' onClick={playNextQuiz} />
                  </>
              }
            </div>
          </> :
          isQuitState ?
            <>
              <p className='pop-up_result_image-info'>
                Вы дейстивтельно хотите выйти из игры?
              </p>
              <div className='pop-up_result_btn-wrapper'>
                <PrimaryBtn title='Нет' classes='pop-up_btn pop-up_btn-short' onClick={quitNoHandler} />
                <PrimaryBtn title='Да' classes='pop-up_btn pop-up_btn-short pop-up_btn_active' onClick={quitYesHandler} />
              </div>
            </> :

            <>
              <div className='pop-up_image_wrapper'>
                <Image path={imageNum} alt={pictureName} />
              </div>
              <div className={isCorrect ? rightStyle : wrongStyle}></div>
              <h3 className='pop-up_image-name'>{pictureName}</h3>
              <p className='pop-up_image-info'>
                {author},
                <span>{year}</span>
              </p>
              <div className='pop-up_btn-wrapper'>
                <PrimaryBtn title='Дальше' classes='pop-up_btn' onClick={clickNext} />
              </div>
            </>}
      </div>
    </div >
  )
}

export default PopUp