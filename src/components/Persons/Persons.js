import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	// static getDerivedStateFromProps (state, props) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	shouldComponentUpdate (nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		return true;
	}

	// componentWillReceiveProps (props) {
	// 	console.log('[Persons.js] componentWillReceiveProps', props);
	// }

	getSnapshotBeforeUpdate (prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'This is a snapshot!' };
	}

	componentDidUpdate (prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	// componentWillUpdate () {
	// 	console.log('[Persons.js] componentWillUpdate');
	// }

	render () {
		console.log('[Persons.js] redering...');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					name={person.name}
					job={person.job}
					key={person.id}
					click={() => this.props.clicked(index)}
					change={(event) => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
