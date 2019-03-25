import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


//Needed to refactor the app component into a class component in order to pass information between child and parent
// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: '10px'}}>
//       <SearchBar />
//     </div>
//   );
// };

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) =>  { 
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  }
   /*term refers to the search term, we should pass on this method to the searchbar as a prop */

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>{/*si onSearchSubmit esta igualado a una funciion y no a un => function , como se esta pasando la funcion se esta llamando en sin el contexto y el this.setState
        no se puede llamar, ya que setState no existe donde se esta llamando, al igualar onSearchSubmit a un => function va a usar el this del parent  */}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;