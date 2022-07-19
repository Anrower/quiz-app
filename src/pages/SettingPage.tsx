import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation"
import ColorSlider from "../components/ui/VolumeRange";
import './settingPage.css'
import { RootState } from "../store";
import { updateVolumeRange } from "../store/slices/settingSlice";

const SettingPage = () => {


  const volumeRangeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange)
  const textStyle = 'text-3xl text-white font-bold';

  const dispatch = useDispatch();

  const volumeValueHandler = (volume: string) => {
    dispatch(updateVolumeRange(volume))
  }

  return (
    <div>
      <Navigation context={'settingPage'} />
      <div className='flex flex-col mt-32 ml-28 max-w-lg gap-20'>
        <div className="volume flex flex-col gap-4">
          <label>
            <span className={textStyle}>Volume:</span>
            <span className='text-2xl text-white ml-4 text-center'>{volumeRangeValue}
            </span>
            <ColorSlider defaultValue={volumeRangeValue} onChange={volumeValueHandler} />
          </label>
          <div className="flex justify-between">
            <input className="sound_off" type='button'></input>
            <input className="sound_on" type='button'></input>
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
    </div>
  )
}

export default SettingPage