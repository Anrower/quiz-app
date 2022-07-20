import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateVolumeRange } from '../../store/slices/settingSlice'

function valuetext(value: number) {
  return `${value}`;
}

export default function VolumeRange() {

  const volumeRangeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 500 }}>
      <Slider
        value={Number(volumeRangeValue)}
        aria-label="Volume"
        defaultValue={Number(volumeRangeValue)}
        getAriaValueText={valuetext}
        color="primary"
        onChange={(e) => dispatch(updateVolumeRange((e.target as HTMLTextAreaElement).value))}
      />
    </Box>
  );
}