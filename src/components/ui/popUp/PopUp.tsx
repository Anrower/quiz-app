import { useNavigate } from 'react-router-dom';
import './popUp.css'
import { Image } from '../GamePicture'
import PrimaryBtn from '../PrimaryBtn'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { nextRound, openPopup, updateTimerAnimation, updateRoundAnswer, resetRound, updateIsReady, updateLastTab } from '../../../store/slices/gameSlice';
import { toggleTimerActive, updateTimerCurrentSec } from '../../../store/slices/settingSlice';
import { updateResulText, updateResultAnswer, updateIsQuitState } from '../../../store/slices/popUpSlice';
import { updateGenreStat } from '../../../store/slices/genreSlice';
import grandResult_img from "../../../images/ui_styles/grand_result.svg"
import gameOver_img from "../../../images/ui_styles/game_over.svg"
import congrats_img from "../../../images/ui_styles/congratulations.svg"
import { useCallback, useEffect } from 'react';
import Audio from 'ts-audio';
import clickMusic from '../../../sounds/click.mp3'

const PopUp = () => {
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
  const volumeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);
  const answerTabs = useSelector<RootState, number[]>((state) => state.game.game.roundTab);

  let genreStat = useSelector<RootState, object>((state) => state.genre.genre.genreStat);

  const getVolumeValue = () => {
    return Number(volumeValue) / 100
  }

  useEffect(() => {
    dispatch(updateTimerAnimation('paused'));
    dispatch(toggleTimerActive(false));
    dispatch(updateRoundAnswer(isCorrect));
  }, [dispatch, isCorrect])

  const wrongStyle = 'pop-up_answer-indicator  pop-up_wrong-answer'
  const rightStyle = 'pop-up_answer-indicator pop-up_right-answer'

  const clickSound = Audio({
    file: clickMusic,
    loop: false,
    volume: getVolumeValue(),
    preload: true,
  });

  const clickNext = () => {
    clickSound.play()
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    updateGenStat()
    if (totalAnswerCount !== 9) {
      dispatch(nextRound())
    }
    dispatch(updateIsReady(false))
    return
  }

  const playAgainYes = () => {
    clickSound.play()
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound())
  }

  const playAgainNo = () => {
    clickSound.play()
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound()) // TODO получить данные
    navigate('/')
  }

  const playNextQuiz = () => {
    clickSound.play()
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound())
    navigate('/categories')
  }

  const quitNoHandler = () => {
    clickSound.play()
    dispatch(openPopup(false))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(updateIsQuitState(false))
  }

  const quitYesHandler = () => {
    clickSound.play()
    playAgainNo()
    dispatch(updateIsQuitState(false))
  }

  const answerCount = (arr: boolean[] | number[]) => {  //TODO Вынести в хэндлер
    const number = arr.map((el) => el ? 1 : 0)
      .reduce<number>((acc, cur) => acc + cur, 0);
    return number
  }

  const rightAnswerCount = answerCount(roundAnswers)
  const totalAnswerCount = answerCount(answerTabs)


  const updateGenStat = useCallback(() => {
    type ObjectKey = keyof typeof genreStat;
    const genreStatResult = {
      ...genreStat, [activeGenre as ObjectKey]: rightAnswerCount
    }
    dispatch(updateGenreStat(genreStatResult))
    return
  }, [activeGenre, rightAnswerCount, dispatch, genreStat]);

  useEffect(() => {
    if (totalAnswerCount === 9) {
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

  }, [round, totalAnswerCount])

  return (
    <div className='pop-up'>
      <div className='pop-up_body'>
        {totalAnswerCount === 9 ?
          <>
            <div className='pop-up_image_wrapper'>
              <img
                className='pop-up_result-img'
                src={rightAnswerCount < 1 ?
                  gameOver_img :
                  rightAnswerCount > 9 ?
                    grandResult_img :
                    congrats_img}
                alt={resultText} />
            </div>
            <h3 className='pop-up_result_image-name'>{resultText}</h3>
            <p className='pop-up_result_image-info'>
              {rightAnswerCount >= 1 && rightAnswerCount < 10 ?
                <span >{resultAnswer}/10</span> :
                resultAnswer
              }
            </p>
            <div className='pop-up_result_btn-wrapper'>
              {rightAnswerCount < 1 ?
                <>
                  <PrimaryBtn title='Нет' classes='pop-up_btn pop-up_btn-short' onClick={playAgainNo} />
                  <PrimaryBtn title='Да' classes='pop-up_btn pop-up_btn-short pop-up_btn_active' onClick={playAgainYes} />
                </> :
                rightAnswerCount > 9 ?
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