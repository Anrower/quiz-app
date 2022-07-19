import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface Iprops {
  defaultValue: string,
  onChange: (volume: string) => void,
}

function valuetext(value: number) {
  return `${value}`;
}

export default function ColorSlider(props: Iprops) {

  const { defaultValue, onChange } = props
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Volume"
        defaultValue={Number(defaultValue)}
        getAriaValueText={valuetext}
        color="primary"
        onChange={(e) => onChange((e.target as HTMLTextAreaElement).value)}
      />
    </Box>
  );
}