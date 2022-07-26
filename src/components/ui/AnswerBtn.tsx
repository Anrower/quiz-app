import { useState } from 'react';
import './primaryBtn.css';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import PopUp from '../../components/ui/popUp/PopUp';
import { togglePopup } from '../../store/slices/gameSlice';
import { toggleTimerActive } from "../../store/slices/timerSlice";
interface buttonProps {
  title: string,
}


const AnswerBtn = (props: buttonProps) => {

  const dispatch = useDispatch()

  const [isWrong, setIsWrong] = useState(false)

  const popUpIsOpen = useSelector<RootState, boolean>((state) => state.game.game.popUpIsOpen);
  const rightAnswerValue = useSelector<RootState, string>((state) => state.game.game.author);


  const checkAnswer = (title: string) => {
    if (title === rightAnswerValue) {
      console.log('You are right')
      dispatch(toggleTimerActive(false))
      dispatch(togglePopup(true))
    } else {
      console.log('Sorry you are wrong')
      setIsWrong(true)
      dispatch(toggleTimerActive(false))

      dispatch(togglePopup(true))
    }
  }

  const { title } = props
  const defaultClasses: string = 'default_btn answer_btn '

  return (
    <>
      {!popUpIsOpen ?
        <button
          className={defaultClasses}
          onClick={() => checkAnswer(title)}>
          {title}
        </button > :
        <PopUp isWrong={isWrong} />}
    </>

  )
}

export default AnswerBtn