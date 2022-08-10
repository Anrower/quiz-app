import './gamePicture.css'
interface Iprops {
  path: string,
  alt: string,
  onClick?: (a: string) => void
}

export const Image = (props: Iprops) => {

  const { path, alt, onClick } = props

  return (
    <img className='game_picture' src={require(`../../images/pictures/${path}.jpg`)} alt={alt} onClick={onClick ? () => onClick(alt) : undefined} />
  );
};