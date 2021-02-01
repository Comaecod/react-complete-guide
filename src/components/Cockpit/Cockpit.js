import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	const new_class = [];

	let btnClass = '';
	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 3) {
		new_class.push(classes.red);
	}
	if (props.persons.length <= 2) {
		new_class.push(classes.bold);
	}
	if (props.persons.length <= 1) {
		new_class.push(classes.font);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.cockpitTitle}</h1>
			<p className={new_class.join(' ')}>This is cool!</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Name
			</button>
		</div>
	);
};

export default cockpit;
