import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
	render () {
		console.log('[Person.js] rendering...');
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>
					My name is {this.props.name} and my job role is '{this.props.job}'
				</p>
				<p>{this.props.children}</p>
				<input type='text' onChange={this.props.change} value={this.props.name} />
			</div>
		);
	}
}

export default Person;
