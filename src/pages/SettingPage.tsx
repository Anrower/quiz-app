import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation"
import ColorSlider from "../components/ui/VolumeRange";
import './settingPage.css'
import { RootState } from "../store";
import { updateVolumeRange, updateVolumeOff } from "../store/slices/settingSlice";

const SettingPage = () => {
  const volumeRangeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);
  const volumeOffValue = useSelector<RootState, boolean>((state) => state.settings.setting.volumeOff);

  const [activeSoundOffBtn, setActiveSoundOffBtn] = useState(volumeOffValue)
  const [volumeRange, setVolumeRange] = useState(volumeRangeValue);

  const textStyle = 'text-3xl text-white font-bold';

  const dispatch = useDispatch();

  const volumeValueHandler = (volume: string) => {
    setVolumeRange(volume);
    dispatch(updateVolumeRange(volumeRange));
  }

  const soundOffHandler = () => {
    setActiveSoundOffBtn(true)
    dispatch(updateVolumeOff(activeSoundOffBtn));
    setVolumeRange('0');
    dispatch(updateVolumeRange(volumeRange));
  }

  const soundOnHandler = () => {
    setActiveSoundOffBtn(false)
    dispatch(updateVolumeOff(activeSoundOffBtn));
    setVolumeRange('40');
    dispatch(updateVolumeRange(volumeRange));
  }

  return (
    <div>
      <Navigation context={'settingPage'} />
      <div className='flex flex-col mt-32 ml-28 max-w-lg gap-20'>
        <div className="volume flex flex-col gap-4">
          <label>
            <span className={textStyle}>Volume:</span>
            <span className='text-2xl text-white ml-4 text-center'>
              {volumeRange}
            </span>
            <ColorSlider value={volumeRange} onChange={volumeValueHandler} />
          </label>
          <div className="flex justify-between">
            <input
              className={
                `sound_off ${activeSoundOffBtn ?
                  'sound-btn_active ' :
                  ''}`
              }
              type='button'
              onClick={soundOffHandler}></input>
            <input className={
              `sound_off ${activeSoundOffBtn ?
                '' :
                'sound-btn_active'}`
            }
              type='button'
              onClick={soundOnHandler}></input>
          </div>
        </div>
        <div className="time flex flex-col gap-4">
          <p className={textStyle}>Time game:</p>
          <div className="flex gap-4 items-center">
            <p className='text-2xl text-white'>value</p>
            <label className='switch flex flex-col'>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

        </div>
        <div className="timeToAnswer flex flex-col gap-4">
          <p className={textStyle}>Time to answer:</p>
          <div className="flex gap-4 items-center">
            <div className='flex gap-6'>
              <span className='text-2xl text-white'>value</span>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default SettingPage