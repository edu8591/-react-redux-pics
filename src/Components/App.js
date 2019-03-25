import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


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

  async onSearchSubmit (term)  { 
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 2a2240d3f10ad3b951ba710dd7e3a108549b97688b24de511408ff188bc9375c'
      }
    });
    this.setState({ images:response.data.results });
  }
   /*term refers to the search term, we should pass on this method to the searchbar as a prop */

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;