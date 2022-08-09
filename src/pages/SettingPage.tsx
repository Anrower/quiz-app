import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation"
import VolumeRange from "../components/ui/VolumeRange";
import GameTimeSwitcher from "../components/ui/GameTimeSwitcher";
import './settingPage.css'
import { RootState } from "../store";
import { updateVolumeRange, updateVolumeSwitch, increaseTimeAnswer, decreaseTimeAnswer } from "../store/slices/settingSlice";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import MobileNavigation from "../components/MobileNavigation";

const SettingPage = () => {

  const volumeRangeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);
  const isSound = useSelector<RootState, boolean>((state) => state.settings.setting.isSound);
  const timeAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const soundBtnActive = useSelector<RootState, string>((state) => state.settings.setting.soundBtnActiveClass);

  const dispatch = useDispatch();

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
    if (timeAnswerValue <= 5) {
      return
    }
    dispatch(decreaseTimeAnswer())
  }

  return (
    <div className="setting_page">
      <Navigation context={'settingPage'} />
      <div className='setting_content flex flex-col mt-32 ml-28 max-w-lg gap-20'>
        <div className="volume flex flex-col gap-4">
          <label>
            <span className="text_style">Звук:</span>
            <span className='text_style_value'>
              {volumeRangeValue}
            </span>
            <VolumeRange />
          </label>
          <div className="flex justify-between">
            <input
              className={
                `sound_off ${!isSound ?
                  soundBtnActive :
                  ''}`
              }
              type='button'
              onClick={soundOffHandler}>
            </input>
            <input className={
              `sound_on ${isSound ?
                soundBtnActive :
                ''}`
            }
              type='button'
              onClick={soundOnHandler}></input>
          </div>
        </div>
        <div className="time flex flex-col gap-4">
          <p className="text_style">Время игры:</p>
          <div className="text_style_value">
            <GameTimeSwitcher />
          </div>
        </div>
        <div className="timeToAnswer flex flex-col gap-4">
          <p className="text_style">Время ответа:</p>
          <div className="flex gap-4 items-center">
            <div className='setting_btn flex gap-6'>
              <PrimaryBtn title='-'
                classes={'round_btn '}
                onClick={minusTimeHandler}
              />
              <span className='text_style_value'>{timeAnswerValue}s</span>
              <PrimaryBtn title='+'
                classes={'round_btn '}
                onClick={plusTimeHandler} />
            </div>
          </div>

        </div>
      </div>
      {/* {windowWidth <= 519 ? <MobileNavigation context={'settingPage'} /> : null} */}
    </div >
  )
}

export default SettingPage