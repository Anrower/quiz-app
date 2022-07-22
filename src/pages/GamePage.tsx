import GamePicture from '../components/ui/GamePicture';
import PrimaryBtn from '../components/ui/PrimaryBtn';
import Timer from '../components/ui/Timer'
import './gamePage.css'
import { getAuthorsNames, getRandomAuthor, getfilterByAuthorName } from '../handler/getUniqueAuthorNames';


const GamePage = () => {
  const tab_btn = 'tab_btn';
  const answered_tab = tab_btn + ' answered_tab';
  console.log(getAuthorsNames())
  console.log(getRandomAuthor())
  console.log(getfilterByAuthorName())

  return (
    <div className='game'>
      {/* <Timer /> */}
      {/* <Question> */}
      <Timer />
      <h3 className='game_question'>Who is the author of this picture?</h3>
      <div className='game_picture_wrapper'>
        <GamePicture />
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
        <PrimaryBtn title='Start Quiz' classes={'answer_btn'} />
        <PrimaryBtn title='Start Quiz' classes={'answer_btn'} />
        <PrimaryBtn title='Start Quiz' classes={'answer_btn'} />
        <PrimaryBtn title='Start Quiz' classes={'answer_btn'} />
      </div>
    </div>
  )
}

export default GamePage