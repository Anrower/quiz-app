import { Image } from '../components/ui/GamePicture';
import Timer from '../components/ui/Timer'
import { useDispatch } from "react-redux";
import { updateAuthor } from '../store/slices/gameSlice';
import './gamePage.css'
import { get4UniqAuthor, getfilterByAuthorName } from '../handler/getUniqueAuthorNames';
import AnswerBtn from '../components/ui/AnswerBtn';


const GamePage = () => {

  const dispatch = useDispatch();

  const tab_btn = 'tab_btn';
  const answered_tab = tab_btn + ' answered_tab';

  const tempArrBtn = [...get4UniqAuthor()]
  const ranVal = Math.floor(Math.random() * tempArrBtn.length)
  const tempDataByAuthor = getfilterByAuthorName(tempArrBtn[ranVal])
  const correctAnwser = tempDataByAuthor[0].author
  dispatch(updateAuthor(correctAnwser))
  console.log(correctAnwser)
  console.log(`random value is ${ranVal}`)
  console.log(`Data by author:`)
  console.log(tempDataByAuthor)
  const tempImgByAuthorData = tempDataByAuthor[0].imageNum
  console.log(`image by author ${tempImgByAuthorData}`)
  const tempAuthor1 = getfilterByAuthorName(tempArrBtn[0])[0].author
  const tempAuthor2 = getfilterByAuthorName(tempArrBtn[1])[0].author
  const tempAuthor3 = getfilterByAuthorName(tempArrBtn[2])[0].author
  const tempAuthor4 = getfilterByAuthorName(tempArrBtn[3])[0].author
  const tempImgName = tempDataByAuthor[0].name

  return (
    <div className='game'>
      <Timer />
      <h3 className='game_question'>Who is the author of this picture?</h3>
      <div className='game_picture_wrapper'>
        <Image path={tempImgByAuthorData} alt={tempImgName} />
        <div className='right-answer_tab'>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
          <div className={answered_tab}></div>
          <div className={tab_btn}></div>
          <div className={tab_btn}></div>
        </div>
      </div>
      <div className='answers_btn'>
        {/* <PrimaryBtn
          title={tempAuthor1}
          classes={'answer_btn'}
        />
        <PrimaryBtn title={tempAuthor2} classes={'answer_btn'} />
        <PrimaryBtn title={tempAuthor3} classes={'answer_btn'} />
        <PrimaryBtn title={tempAuthor4} classes={'answer_btn'} /> */}
        <AnswerBtn title={tempAuthor1} />
        <AnswerBtn title={tempAuthor2} />
        <AnswerBtn title={tempAuthor3} />
        <AnswerBtn title={tempAuthor4} />
      </div>
    </div>
  )
}

export default GamePage