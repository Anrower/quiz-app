import './primary_btn.css';

interface buttonProps {
  title: string,
  classes: string,
  onClick?: () => void,
}

const PrimaryBtn = (props: buttonProps) => {
  const { title, classes, onClick } = props
  const defaultClasses: string = 'default_btn '
  const Allclasses = defaultClasses + classes;

  return (
    <button className={Allclasses}
      onClick={onClick}>
      {title}
    </button>
  )
}

export default PrimaryBtn