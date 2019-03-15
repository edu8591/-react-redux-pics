import React from 'react';

/*Hay varias maneras de solucionar el error que sale con el this el legacy:
    class SearchBar extends React.Component{
      constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
      state = {term: '' };
      onFormSubmit(event) {              //we can also transform this function into an arrow function  "onFormSubmit = (event) => {"
        event.preventDefault();
        console.log(this.state.term)
    }
*/
class SearchBar extends React.Component{
  
  state = {term: '' };
  onFormSubmit(event) {
    event.preventDefault();
    //console.log(this.state.term);
    /*inside of a class 'this' will give me access to the state, render and onSubmit, but within a function it works differently and will not give acces to the state   */
    this.props.onSubmit(this.state.term);//in a class component props should be called with a this. atatched at the begning
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> {/*another solution for error described above is to pass the arrow function directly to the props, I will wrap onFormSubmit with an arrow function, and invoque onFormSubmit */}
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term}  
              onChange={e => this.setState({ term: e.target.value})}
            />{/*I can also use an arrow function instead of the onInputChange  "(event) => console.log(event.target.value)"  */}
            {/*Now it is a controlled environment because the value of the input is stored in the react code and is overwriting the html, before it was uncontrolled because the input tag, and html element was the only place where i could find the desired information */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;