import React from 'react';
import classes from './Person.css';

const person = (props) => {
	console.log('[Person.js] rendering...');
	return (
		<div className={classes.Person}>
			<p onClick={props.click}>
				I am from {props.name} and I am working as a {props.job}
			</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.change} value={props.name} />
		</div>
	);
};

export default person;
