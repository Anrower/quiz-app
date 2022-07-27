import './gamePicture.css'
interface Iprops {
  path: string,
  alt: string,
}

export const Image = (props: Iprops) => {

  const { path, alt } = props
  console.log(path, alt)

  return (
    <img className='game_picture' src={require(`../../images/pictures/${path}.jpg`)} alt={alt} />
  );
};