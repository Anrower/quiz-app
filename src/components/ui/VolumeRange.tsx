import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface Iprops {
  value: string,
  onChange: (volume: string) => void,
}

function valuetext(value: number) {
  return `${value}`;
}

export default function ColorSlider(props: Iprops) {

  const { value, onChange } = props
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        value={Number(value)}
        aria-label="Volume"
        defaultValue={Number(value)}
        getAriaValueText={valuetext}
        color="primary"
        onChange={(e) => onChange((e.target as HTMLTextAreaElement).value)}
      />
    </Box>
  );
}