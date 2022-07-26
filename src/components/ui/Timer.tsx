import React from "react";
import './timer.css'
import '../navigation.css'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTimerActive, decrementTimerCurrentSec, updateTimerCurrentSec } from "../../store/slices/settingSlice";
import { openPopup } from "../../store/slices/gameSlice";



export default function Timer() {
  const dispatch = useDispatch();

  const timeAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const timerActive = useSelector<RootState, boolean>((state) => state.settings.setting.timerActive);
  const timerCurrentSec = useSelector<RootState, number>((state) => state.settings.setting.timerCurrentSec);

  React.useEffect(() => {
    const updateTimer = () => {
      dispatch(decrementTimerCurrentSec())
    }
    if (timerCurrentSec > 0 && timerActive) {
      setTimeout(updateTimer, 1000);
    } else {
      dispatch(toggleTimerActive(false))
      dispatch(openPopup(true))
    }
  }, [dispatch, timerActive, timerCurrentSec]);



  return (
    <div className="timer">
      <div className="close"></div>
      <div className="timer_line">
        <div style={{ animationDuration: `${timeAnswerValue}s` }} className="current_time"></div>
      </div>
      <div className="timer_seconds">
        <span>{timerCurrentSec}</span>
      </div>
    </div>
  );
}