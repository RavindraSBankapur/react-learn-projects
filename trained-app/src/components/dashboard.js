import React, { Component } from 'react';
import Label from './../containers/label.js';
import Search from './../containers/search.js';
import List from './../containers/list.js';
import {UserData} from './../resources/data.js';

class Dashboard extends Component {

	constructor(props) {
		super(props)
		this.state = {
			suggestedData : []
		}
	}

	userEnteredData = (data) => {
 		console.log('input data from dashboard',data);
 		var matchedData = [];
 		UserData.map(user => {
 			if(user.name.indexOf(data) !== -1){
 				matchedData.push(user.name);
 			}
 		})
 		this.setState({suggestedData:matchedData});
	}



  render() {
  	console.log('states from matche data',this.state);
    return (
      <div className="Dashboard">
       
       <div><Search onUserInput={this.userEnteredData} /></div>
       <div><List dataList={UserData} /></div>
       <div><Label typedata={this.state.suggestedData}/></div>

      </div>
    );
  }
}

export default Dashboard;