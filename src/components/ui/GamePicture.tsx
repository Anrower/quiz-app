import './gamePicture.css'
interface Iprops {
  path: string,
  alt: string,
  style?: any,
}

export const Image = (props: Iprops) => {

  const { path, alt } = props

  return (
    <img className='game_picture' src={require(`../../images/pictures/${path}.jpg`)} alt={alt} />
  );
};