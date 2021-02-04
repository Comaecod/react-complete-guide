import React, { Component } from 'react';
import classes from './Person.css';
import withClassAnother from '../../../hoc/withClassAnother';
import Auxiliary from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
	constructor (props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount () {
		//document.querySelector('input').focus();
		// Not a great method, instead use refs by react
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log('[Person.js] Context: ', this.context.authenticated);
	}

	render () {
		console.log('[Person.js] rendering...');
		return (
			<Auxiliary>
				{
					this.context.authenticated ? <p>You are logged in!</p> :
					<p>Please Login!</p>}
				<p onClick={this.props.click}>
					My name is {this.props.name} and my job role is '{this.props.job}'
				</p>
				<p>{this.props.children}</p>
				<input
					// ref={(inputEl) => (this.inputElement = inputEl)}
					// Old Approach but from react 16.3, you can use the following:
					ref={this.inputElementRef}
					type='text'
					onChange={this.props.change}
					value={this.props.name}
				/>
			</Auxiliary>
		);
	}
}

Person.propTypes = {
	click  : PropTypes.func,
	name   : PropTypes.string,
	job    : PropTypes.string,
	change : PropTypes.func
};

export default withClassAnother(Person, classes.Person);
