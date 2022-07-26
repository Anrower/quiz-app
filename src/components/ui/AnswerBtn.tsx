import './primaryBtn.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import PopUp from '../../components/ui/popUp/PopUp';
import { updateCorrectAnswer } from '../../store/slices/gameSlice';
import { toggleTimerActive } from "../../store/slices/settingSlice"
interface buttonProps {
  title: string,
}

const AnswerBtn = (props: buttonProps) => {

  const dispatch = useDispatch()

  const popUpIsOpen = useSelector<RootState, boolean>((state) => state.game.game.popUpIsOpen);
  const rightAnswerValue = useSelector<RootState, string>((state) => state.game.game.author);

  const { title } = props

  // React.useEffect(() => {
  // }, [])

  const checkAnswer = (title: string, answer: string) => {
    if (title === answer) {
      console.log('You are right')
      dispatch(updateCorrectAnswer(true))
      dispatch(toggleTimerActive(false))
    } else {
      console.log('Sorry you are wrong')
      dispatch(updateCorrectAnswer(false))
      dispatch(toggleTimerActive(false))
    }
  }

  const isCorrectAnswer = useSelector<RootState, boolean>((state) => state.game.game.isCorrectAnswer);

  const defaultClasses: string = 'default_btn answer_btn '

  return (
    <>
      <button
        className={defaultClasses}
        onClick={() => checkAnswer(title, rightAnswerValue)}>
        {title}
      </button >
      {popUpIsOpen ? <PopUp /> : null}
    </>

  )
}

export default AnswerBtn