import './popUp.css'
import { Image } from '../GamePicture'
import PrimaryBtn from '../PrimaryBtn'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { nextRound, openPopup, updateTimerAnimation } from '../../../store/slices/gameSlice';
import { toggleTimerActive, updateTimerCurrentSec } from '../../../store/slices/settingSlice';

const PopUp = () => {
  const dispatch = useDispatch()

  const timerAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const imageNum = useSelector<RootState, string>((state) => state.game.game.correctInfo.imageNum);
  const pictureName = useSelector<RootState, string>((state) => state.game.game.correctInfo.name);
  const author = useSelector<RootState, string>((state) => state.game.game.correctInfo.author);
  const year = useSelector<RootState, string>((state) => state.game.game.correctInfo.year);
  const isCorrect = useSelector<RootState, boolean>((state) => state.game.game.isCorrectAnswer);

  const wrongStyle = 'pop-up_answer-indicator  pop-up_wrong-answer'
  const rightStyle = 'pop-up_answer-indicator pop-up_right-answer'

  const clickHandler = () => {
    dispatch(openPopup(false))
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(updateTimerAnimation('running'))
    dispatch(toggleTimerActive(true))
    dispatch(nextRound())
  }

  return (
    <div className='pop-up'>
      <div className='pop-up_body'>
        <div className='pop-up_image_wrapper'>
          <Image path={imageNum} alt={pictureName} />
          <div className={isCorrect ? rightStyle : wrongStyle}></div>
          <h3 className='pop-up_image-name'>{pictureName}</h3>
          <p className='pop-up_image-info'>
            {author},
            <span>{year}</span>
          </p>
          <div className='pop-up_btn-wrapper'>
            <PrimaryBtn title='Next' classes='pop-up_btn' onClick={clickHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp