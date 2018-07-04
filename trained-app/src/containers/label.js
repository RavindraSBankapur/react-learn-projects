import React, { Component } from 'react';

class Label extends Component {
  
	constructor(props){
		super(props)
	}
	searchedData(data){
		return(
			data.map((users , index) => {
				return <li key={index}>{users}</li>
			})
		)
	}

  render() {
  	console.log('searched data',this.props);
    return (
      <div className="App">
       <h1>label goes here</h1>
       {this.searchedData(this.props.typedata)}
      </div>
    );
  }
}

export default Label;