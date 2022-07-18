import './primary_btn.css';

interface buttonProps {
  title: string,
  classes: string,
}

const PrimaryBtn = (props: buttonProps) => {
  const { title, classes } = props
  const defaultClasses: string = 'default_btn'
  const Allclasses = defaultClasses + classes;

  return (
    <button className={Allclasses}>
      {title}
    </button>
  )
}

export default PrimaryBtn