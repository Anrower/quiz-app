import * as React from 'react';
import Switch from '@mui/material/Switch';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateTimerSwitch } from '../../store/slices/settingSlice'


export default function ControlledSwitches() {

  const showTimer = useSelector<RootState, boolean>((state) => state.settings.setting.showTimer);
  const dispatch = useDispatch();

  return (
    <Switch
      sx={{
        "& .MuiSwitch-track": {
          backgroundColor: 'white',
        }
      }}
      color={'primary'}
      checked={showTimer}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(updateTimerSwitch(e.target.checked))
      }
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}