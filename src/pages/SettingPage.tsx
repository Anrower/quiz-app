import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation"
import VolumeRange from "../components/ui/VolumeRange";
import GameTimeSwitcher from "../components/ui/GameTimeSwitcher";
import './settingPage.css'
import { RootState } from "../store";
import { updateVolumeRange, updateVolumeSwitch, increaseTimeAnswer, decreaseTimeAnswer } from "../store/slices/settingSlice";
import PrimaryBtn from "../components/ui/PrimaryBtn";


const SettingPage = () => {

  const volumeRangeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);
  const isSound = useSelector<RootState, boolean>((state) => state.settings.setting.isSound);
  const timeAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);

  const textStyle = 'text-3xl text-white font-bold';
  const dispatch = useDispatch();

  useEffect(() => {
  }, [volumeRangeValue, isSound, timeAnswerValue])


  const soundOffHandler = () => {
    dispatch(updateVolumeSwitch(false));
    dispatch(updateVolumeRange('0'));
  }

  const soundOnHandler = () => {
    dispatch(updateVolumeSwitch(true));
    dispatch(updateVolumeRange('40'));
  }


  const plusTimeHandler = () => {
    dispatch(increaseTimeAnswer())
  }

  const minusTimeHandler = () => {
    if (timeAnswerValue <= 0) {
      return
    }
    dispatch(decreaseTimeAnswer())
  }

  return (
    <div>
      <Navigation context={'settingPage'} />
      <div className='flex flex-col mt-32 ml-28 max-w-lg gap-20'>
        <div className="volume flex flex-col gap-4">
          <label>
            <span className={textStyle}>Звук:</span>
            <span className='text-2xl text-white ml-4 text-center'>
              {volumeRangeValue}
            </span>
            <VolumeRange />
          </label>
          <div className="flex justify-between">
            <input
              className={
                `sound_off ${!isSound ?
                  'sound-btn_active ' :
                  ''}`
              }
              type='button'
              onChange={soundOffHandler}>
            </input>
            <input className={
              `sound_on ${isSound ?
                'sound-btn_active' :
                ''}`
            }
              type='button'
              onClick={soundOnHandler}></input>
          </div>
        </div>
        <div className="time flex flex-col gap-4">
          <p className={textStyle}>Время игры:</p>
          <div className="flex gap-4 items-center">
            <GameTimeSwitcher />
          </div>
        </div>
        <div className="timeToAnswer flex flex-col gap-4">
          <p className={textStyle}>Время ответа:</p>
          <div className="flex gap-4 items-center">
            <div className='flex gap-6'>
              <PrimaryBtn title='-'
                classes={'round_btn '}
                onClick={minusTimeHandler}
              />
              <span className='text-2xl text-white'>{timeAnswerValue}s</span>
              <PrimaryBtn title='+'
                classes={'round_btn '}
                onClick={plusTimeHandler} />
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default SettingPage