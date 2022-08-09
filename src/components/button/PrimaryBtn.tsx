import './primaryBtn.css';
import Audio from 'ts-audio';
import { useSelector } from 'react-redux';
import { RootState } from "../../store";
import clickSound from '../../sounds/click.mp3'

interface buttonProps {
  title: string,
  classes: string,
  onClick?: any,
}

const PrimaryBtn = (props: buttonProps) => {
  const volumeValue = useSelector<RootState, string>((state) => state.settings.setting.volumeRange);

  const defaultClick = () => {
    const getVolumeValue = () => {
      return Number(volumeValue) / 100
    }

    const sound = Audio({
      file: clickSound,
      loop: false,
      volume: getVolumeValue(),
      preload: true,
    });
    sound.play()
  }
  let { title, classes, onClick } = props
  const defaultClasses: string = 'default_btn '
  const Allclasses = defaultClasses + classes;
  if (!onClick) {
    onClick = defaultClick()
  }

  return (
    <button className={Allclasses}
      onClick={onClick}>
      {title}
    </button>
  )
}

export default PrimaryBtn