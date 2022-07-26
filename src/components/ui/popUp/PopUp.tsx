import './popUp.css'
import { Image } from '../GamePicture'
import PrimaryBtn from '../PrimaryBtn'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

interface IPopUp {
  isWrong: boolean,
}


const PopUp = (props: IPopUp) => {
  const dispatch = useDispatch()

  const imageNum = useSelector<RootState, string>((state) => state.game.game.correctInfo.imageNum);
  const pictureName = useSelector<RootState, string>((state) => state.game.game.correctInfo.name);
  const author = useSelector<RootState, string>((state) => state.game.game.correctInfo.author);
  const year = useSelector<RootState, string>((state) => state.game.game.correctInfo.year);

  const wrongStyle = 'pop-up_answer-indicator  pop-up_wrong-answer'
  const rightStyle = 'pop-up_answer-indicator pop-up_right-answer'
  const { isWrong } = props

  return (
    <div className='pop-up'>
      <div className='pop-up_body'>
        <div className='pop-up_image_wrapper'>
          <Image path={imageNum} alt={pictureName} />
          <div className={isWrong ? wrongStyle : rightStyle}></div>
          <h3 className='pop-up_image-name'>{pictureName}</h3>
          <p className='pop-up_image-info'>
            {author},
            <span>{year}</span>
          </p>
          <div className='pop-up_btn-wrapper'>
            <PrimaryBtn title='Next' classes='pop-up_btn' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp