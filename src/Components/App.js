import React from 'react';
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
  onSearchSubmit= (term) => { 
    console.log(term)
  }
   /*term refers to the search term, we should pass on this method to the searchbar as a prop */

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;