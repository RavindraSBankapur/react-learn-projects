import React, { Component } from 'react';

class List extends Component {
 
	constructor(props){
		super(props);
	}

	showUserData(data){
		return(
			data.map((users , index) => {
				return <li key={index}>{users.id}</li>
			})
		)
	}

  render() {
  	console.log('props from list' ,this.props);
    return (
      <div className="App">
       <h1>list goes here</h1>
       	{this.showUserData(this.props.dataList)}
      </div>
    );
  }
}

export default List;