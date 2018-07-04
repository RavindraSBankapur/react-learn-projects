import React, { Component } from 'react';

class Search extends Component {

	constructor(props){
		super(props)
		// this.handleOnChange() = this.handleOnChange.bind(this);
	}
 

 	handleOnChange = (event) => {
 		var userInput = event.target.value;
 		console.log('handle onChange invoked',userInput);
 		this.props.onUserInput(userInput);
 	}

  render() {
    return (
      <div className="App">

       Search<input type="text" onChange={this.handleOnChange}/>
      </div>
    );
  }
}

export default Search;