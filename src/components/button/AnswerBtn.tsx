import './primaryBtn.css';

interface buttonProps {
  title: string,
  onClick: (a: string) => void
}

const AnswerBtn = (props: buttonProps) => {
  const { title, onClick } = props
  const defaultClasses: string = 'default_btn answer_btn '

  return (
    <button
      className={defaultClasses}
      onClick={() => onClick(title)}>
      {title}
    </button >
  )
}

export default AnswerBtn
