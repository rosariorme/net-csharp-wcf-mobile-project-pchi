import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

class Home extends React.Component{
	
	render(){
	return (
	<div>
	<h1>Home</h1>
	<Link to='/users'>Users</Link>
	</div>);
	}
}
export default Home;
