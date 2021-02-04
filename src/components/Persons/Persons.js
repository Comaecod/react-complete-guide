import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
	// shouldComponentUpdate (nextProps, nextState) {
	// 	console.log('[Persons.js] shouldComponentUpdate');
	// 	return nextProps.persons !== this.props.persons;
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
