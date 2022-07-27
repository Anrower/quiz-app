import './primaryBtn.css';
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../store";
// import PopUp from '../../components/ui/popUp/PopUp';

interface buttonProps {
  title: string,
  onClick: (a: string) => void
}

const AnswerBtn = (props: buttonProps) => {

  // const popUpIsOpen = useSelector<RootState, boolean>((state) => state.game.game.popUpIsOpen);

  const { title, onClick } = props

  const defaultClasses: string = 'default_btn answer_btn '

  return (
    // <>
    <button
      className={defaultClasses}
      onClick={() => onClick(title)}>
      {title}
    </button >
    // {/* {popUpIsOpen ? <PopUp /> : null} */ }
    // {/* </> */ }

  )
}

export default AnswerBtn
