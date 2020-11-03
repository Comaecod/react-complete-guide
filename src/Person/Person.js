import React from 'react';
import './Person.css';

const person = (props) => (
	<div className='Person'>
		<p onClick={props.clicked}>
			I am from {props.name} and I am {props.age} years old
		</p>
		<p>{props.children}</p>
		<input type='text' onChange={props.changed} value={props.name} />
	</div>
);

export default person;
