import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateVolumeRange, updateVolumeSwitch } from '../../store/slices/settingSlice'

function valuetext(value: number) {
  return `${value}`;
}

export default function VolumeRange() {

  const volumeRangeValue = useSelector<RootState, number>((state) => state.settings.setting.volumeRange);
  const dispatch = useDispatch();


  const updateRangeHandler = (e: Event) => {
    const value = Number((e.target as HTMLTextAreaElement).value)
    if (value === 0) {
      dispatch(updateVolumeSwitch(false));
      dispatch(updateVolumeRange(value))
    } else {
      dispatch(updateVolumeSwitch(true));
      dispatch(updateVolumeRange(value))
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        value={volumeRangeValue}
        aria-label="Volume"
        defaultValue={volumeRangeValue}
        getAriaValueText={valuetext}
        color="primary"
        onChange={(e) => updateRangeHandler(e)}
      />
    </Box>
  );
}