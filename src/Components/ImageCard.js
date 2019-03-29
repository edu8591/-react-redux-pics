import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }
  
  componentDidMount() {
    // //en las siguientes 2 lineas la altura de la imagen va a ser logeada como 0 ya que, estoy intentando logearlo justo despues de comenzar a cargar la imagen(pero antes de se se cargue y tener la informacion) asi que debo usar un EventListener para obtener los datos que necesito
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState( { spans } )
  };

  render() {
    const { description, urls } = this.props.image;
  
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular}/>
      </div>
    );
  }
}

export default ImageCard;









// // object destructuring
// const vaca = {
//   name: 'sebas',
//   age: 26,
// };


// const { name, age }= vaca;


// function test(person) {
//   const { name, age } = person;
// }

// function test ({ name, age }, x) {

// };