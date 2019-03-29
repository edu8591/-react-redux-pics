import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// aun no estoy usando ImageCard component
// const ImageList = (props) => {
//   const images = props.images.map(({ description, id, urls}) => { //aqui estoy sacando las variables del object o array para poder acceder a ellas sin necesidad de usar el .notation
//     return <img alt={description} key={id} src={urls.regular} />
//   });

//ahora implemento ImageCard component
const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className='image-list'>{images}</div>
};

export default ImageList;