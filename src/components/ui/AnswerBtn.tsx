import './primaryBtn.css';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateAuthor, updateCorrectAnswer } from "../../store/slices/gameSlice"

interface buttonProps {
  title: string,
  // classes: string,
  // onClick?: () => ReactComponentElement,
}


const AnswerBtn = (props: buttonProps) => {

  const rightAnswerValue = useSelector<RootState, string>((state) => state.game.game.author);
  const dispatch = useDispatch()

  const checkAnswer = (title: string) => {
    if (title === rightAnswerValue) {
      console.log('You are right')
      dispatch(updateAuthor(''))
      dispatch(updateCorrectAnswer(true))
    } else {
      console.log('Sorry you are wrong')
      dispatch(updateAuthor(''))
    }
  }

  const { title } = props
  const defaultClasses: string = 'default_btn answer_btn '

  return (
    <button
      className={defaultClasses}
      onClick={() => checkAnswer(title)}>
      {title}
    </button >
  )
}

export default AnswerBtn