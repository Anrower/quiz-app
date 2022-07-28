import { useEffect } from "react";
import './timer.css'
import '../navigation.css'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTimerActive, decrementTimerCurrentSec } from "../../store/slices/settingSlice";
import { updateTimerAnimation, updateCorrectAnswer, openPopup } from "../../store/slices/gameSlice";
// import { useCheckAnswer } from "../../handler/handler"

export default function Timer() {
  // return null
  const dispatch = useDispatch();

  const timeAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const timerActive = useSelector<RootState, boolean>((state) => state.settings.setting.timerActive);
  const timerCurrentSec = useSelector<RootState, number>((state) => state.settings.setting.timerCurrentSec);
  const isTimerAnimation = useSelector<RootState, string>((state) => state.game.game.timerAnimation);
  const popUpIsOpen = useSelector<RootState, boolean>((state) => state.game.game.popUpIsOpen);


  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const updateTimer = () => {
      dispatch(decrementTimerCurrentSec())
    }
    if (timerCurrentSec > 0 && timerActive) {
      timer = setTimeout(updateTimer, 1000);
    } else {
      dispatch(updateTimerAnimation('paused'))
      dispatch(toggleTimerActive(false))
      dispatch(updateCorrectAnswer(false))
      dispatch(openPopup(true))
    }
    return () => {
      clearTimeout(timer)
    }
  }, [dispatch, timerActive, timerCurrentSec, popUpIsOpen]);


  const curTime = <div style={{ animationDuration: `${timeAnswerValue}s`, animationPlayState: `${isTimerAnimation}` }} className="current_time"></div>

  return (
    <div className="timer">
      <div className="close"></div>
      <div className="timer_line">
        {curTime}
      </div>
      <div className="timer_seconds">
        <span>{timerCurrentSec}</span>
      </div>
    </div>
  );
}