import './gamePicture.css'
interface Iprops {
  path: string,
  alt: string,
  onClick?: (a: string) => void,
  addClass?: string,
}

export const Image = (props: Iprops) => {
  let style = 'game_picture '

  const { path, alt, onClick, addClass } = props
  if (addClass) {
    style += addClass
  }

  return (
    <img className={style} src={require(`../../images/pictures/${path}.jpg`)} alt={alt} onClick={onClick ? () => onClick(path) : undefined} />
  );
};