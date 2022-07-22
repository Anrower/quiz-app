import React from "react";
import './timer.css'
import '../navigation.css'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTimerActive } from "../../store/slices/timerSlice";



export default function Timer() {

  const timeAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswer);
  const timerActive = useSelector<RootState, boolean>((state) => state.timer.timer.timerActive);

  const dispatch = useDispatch();

  const [seconds, setSeconds] = React.useState(timeAnswerValue);
  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      dispatch(toggleTimerActive(false))
    }
  }, [seconds, timerActive, dispatch]);



  return (
    <div className="timer">
      <div className="close"></div>
      <div className="timer_line">
        <div style={{ animationDuration: `${timeAnswerValue}s` }} className="current_time"></div>
      </div>
      <div className="timer_seconds">
        <span>{seconds}</span>
      </div>
    </div>
  );
}