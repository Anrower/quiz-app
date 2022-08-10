import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/navigation/Navigation";
import VolumeRange from "../../components/settings/VolumeRange";
import GameTimeSwitcher from "../../components/settings/GameTimeSwitcher";
import Footer from "../../components/footer/Footer";
import './settingPage.css'
import { RootState } from "../../store";
import { updateVolumeRange, updateVolumeSwitch, increaseTimeAnswer, decreaseTimeAnswer, resetSettings } from "../../store/slices/settingSlice";
import PrimaryBtn from "../../components/button/PrimaryBtn";

const SettingPage = () => {

  const volumeRangeValue = useSelector<RootState, number>((state) => state.settings.setting.volumeRange);
  const isSound = useSelector<RootState, boolean>((state) => state.settings.setting.isSound);
  const timeAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const soundBtnActive = useSelector<RootState, string>((state) => state.settings.setting.soundBtnActiveClass);
  const allSettings = useSelector<RootState, object>((state) => state.settings);

  const dispatch = useDispatch();

  const soundOffHandler = () => {
    dispatch(updateVolumeSwitch(false));
    dispatch(updateVolumeRange(0));
  }

  const soundOnHandler = () => {
    dispatch(updateVolumeSwitch(true));
    dispatch(updateVolumeRange(40));
  }

  const plusTimeHandler = () => {
    dispatch(increaseTimeAnswer())
  }

  const defaultSettings = () => {
    dispatch(resetSettings())
  }

  const saveSettings = () => {
    const localSettings = JSON.stringify(allSettings);
    localStorage.setItem('settings', localSettings);
  }

  const minusTimeHandler = () => {
    if (timeAnswerValue <= 5) {
      return
    }
    dispatch(decreaseTimeAnswer())
  }

  return (
    <div className="setting_page">
      <div className="setting_page__content">
        <Navigation context={'settingPage'} />
        <div className='setting_content flex flex-col mt-16 ml-28 max-w-lg gap-20'>
          <div className="volume flex flex-col gap-4">

            <div className="flex flex-col gap-3">
              <p>
                <span className="text_style">Звук:</span>
                <span className='text_style_value'>
                  {volumeRangeValue}
                </span>
              </p>
              <VolumeRange />
            </div>
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
          <div className="time flex flex-col gap-3">
            <p className="text_style">Время игры:</p>
            <div className="text_style_value">
              <GameTimeSwitcher />
            </div>
          </div>
          <div className="timeToAnswer flex flex-col gap-3">
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
          <div className="setting-btn__container flex justify-between">
            <PrimaryBtn title='По умолчанию'
              classes="setting-btn "
              onClick={defaultSettings} />
            <PrimaryBtn title='Сохранить'
              classes="setting-btn "
              onClick={saveSettings} />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default SettingPage