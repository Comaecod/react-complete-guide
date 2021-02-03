import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
	// static getDerivedStateFromProps (state, props) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// shouldComponentUpdate (nextProps, nextState) {
	// 	console.log('[Persons.js] shouldComponentUpdate');
	// 	return nextProps.persons !== this.props.persons;
	// }

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

	componentWillUnmount () {
		console.log('[Persons.js] componentWillUnmount');
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
