import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
	const [ personState, personStateHandler ] = useState({
		persons: [
			{ name: 'Vishnu', age: 22 },
			{ name: 'Hina', age: 21 },
			{ name: 'Shivendu', age: 23 },
			{ name: 'JAVA', age: 25 }
		]
	});

	const [ otherState, otherStateHandler ] = useState({ otherStuff: 'Nothing special here!' });

	console.log(personState, otherState);

	/*
  Note that here 'otherstuff' won't be visible when the state changes as 
  useState doesn't merge the changes with the previous state.

  Therefore in order to overcome that we can use multiple useState splices 
  to store them:
  
  const [ otherState, otherStateHandler ] = useState({ otherStuff: 'Nothing special here!' });

  rather than manually add the previous state to the new state:
  
  otherStuff: personState.otherStuff
  */

	const switchNameHandler = () => {
		personStateHandler({
			persons: [
				{ name: 'Vishnu Vardhan', age: 22 },
				{ name: 'Hina', age: 21 },
				{ name: 'Shivendu', age: 23 },
				{ name: 'JAVA', age: 35 }
			]
		});
	};

	return (
		<div className="App">
			<h1>Comaecod's React Application</h1>
			<p>This is cool!</p>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person name={personState.persons[0].name} age={personState.persons[0].age} />
			<Person name={personState.persons[1].name} age={personState.persons[1].age} />
			<Person name={personState.persons[2].name} age={personState.persons[2].age} />
			<Person name={personState.persons[3].name} age={personState.persons[3].age} />
		</div>
	);
};

export default app;
