import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
	console.log('[Persons.js] redering...');
	return props.persons.map((person, index) => {
		return (
			<Person
				name={person.name}
				job={person.job}
				key={person.id}
				click={() => props.clicked(index)}
				change={(event) => props.changed(event, person.id)}
			/>
		);
	});
};

export default persons;
