import { useEffect } from "react";
import './timer.css'
import '../navigation.css'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTimerActive, decrementTimerCurrentSec } from "../../store/slices/settingSlice";
import { updateTimerAnimation, updateCorrectAnswer, openPopup } from "../../store/slices/gameSlice";
import { updateIsQuitState } from "../../store/slices/popUpSlice";

export default function Timer() {
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
    } else if (timerCurrentSec === 0) {
      dispatch(toggleTimerActive(false))
      dispatch(updateTimerAnimation('paused'))
      dispatch(updateCorrectAnswer(false));
      dispatch(openPopup(true))
    } else {
      dispatch(toggleTimerActive(false))
      dispatch(updateTimerAnimation('paused'))
    }
    return () => {
      clearTimeout(timer)
    }
  }, [dispatch, timerActive, timerCurrentSec, popUpIsOpen]);

  const exitGameHandler = () => {
    dispatch(toggleTimerActive(false))
    dispatch(updateTimerAnimation('paused'))
    dispatch(updateIsQuitState(true))
    dispatch(openPopup(true))
  }


  const curTime = <div style={{ animationDuration: `${timeAnswerValue}s`, animationPlayState: `${isTimerAnimation}` }} className="current_time"></div>

  return (
    <div className="timer">
      <div className="close" onClick={exitGameHandler}></div>
      <div className="timer_line">
        {curTime}
      </div>
      <div className="timer_seconds">
        <span>{timerCurrentSec}</span>
      </div>
    </div>
  );
}