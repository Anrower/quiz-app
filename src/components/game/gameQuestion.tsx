import './gamePage.css'

interface Ipros {
  title?: string;
}


const gameQuestion = (props: Ipros) => {

  const { title } = props;

  return (
    <>
      {
        title ?
          <h3 className='game_question'>
            Какую картину нарисовал {title}
          </h3 > :
          <h3>HEllo</h3>
      }
    </>

  )
}

export default gameQuestion