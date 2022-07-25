import './primaryBtn.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../../store";
import { updateAuthor, updateCorrectAnswer } from "../../store/slices/gameSlice"
import PopUp from '../../components/ui/popUp/PopUp';
interface buttonProps {
  title: string,
  // classes: string,
  // onClick?: () => ReactComponentElement,
}


const AnswerBtn = (props: buttonProps) => {

  const [open, setOpen] = useState(false);

  const rightAnswerValue = useSelector<RootState, string>((state) => state.game.game.author);
  const dispatch = useDispatch()

  const checkAnswer = (title: string) => {
    if (title === rightAnswerValue) {
      console.log('You are right')
      dispatch(updateAuthor(''))
      dispatch(updateCorrectAnswer(true))
      setOpen(!open)
    } else {
      console.log('Sorry you are wrong')
      dispatch(updateAuthor(''))
      setOpen(!open)
    }
  }

  const { title } = props
  const defaultClasses: string = 'default_btn answer_btn '

  return (
    <>
      {!open ?
        <button
          className={defaultClasses}
          onClick={() => checkAnswer(title)}>
          {title}
        </button > :
        <PopUp />}
    </>

  )
}

export default AnswerBtn