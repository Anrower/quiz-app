import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateVolumeRange, updateVolumeSwitch } from '../../store/slices/settingSlice'

function valuetext(value: number) {
  return `${value}`;
}

export default function VolumeRange() {

  const volumeRangeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);
  const dispatch = useDispatch();

  const updateRangeHandler = (e: Event) => {
    const value = String((e.target as HTMLTextAreaElement).value)
    if (value === '0') {
      dispatch(updateVolumeSwitch(false));
      dispatch(updateVolumeRange(value))
    } else {
      dispatch(updateVolumeRange(value))
    }
  }

  return (
    <Box sx={{ width: 500 }}>
      <Slider
        value={Number(volumeRangeValue)}
        aria-label="Volume"
        defaultValue={Number(volumeRangeValue)}
        getAriaValueText={valuetext}
        color="primary"
        // onChange={(e) => dispatch(updateVolumeRange((e.target as HTMLTextAreaElement).value))}
        onChange={(e) => updateRangeHandler(e)}
      />
    </Box>
  );
}