import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	state = {
		persons     : [
			{ id: 'vis1', name: 'Vishnu', age: 22 },
			{ id: 'vis2', name: 'Shivendu', age: 23 },
			{ id: 'vis3', name: 'Hina', age: 21 },
			{ id: 'vis4', name: 'JAVA', age: 25 }
		],
		showPersons : false
	};

	switchNameHandler = (event, id) => {
		//Getting the value of respective index of person from the original state array
		const personIndex = this.state.persons.findIndex((p) => p.user_id === id);

		//Assigning the same object to a new object to not mutate the original array by mistake
		const person = { ...this.state.persons[personIndex] };

		//Changing the name using the event fire that would be triggered when onchange would be called
		//here everytime this changes
		person.name = event.target.value;

		//storing the whole state persons array in a new object using ...(spread) operator
		const persons = [
			...this.state.persons
		];

		//assigning only the new change in the respective index
		//to the above whole persons object with the one that I just changed to
		persons[personIndex] = person;

		//ultimately using setstate to change new persons with the old persons array
		this.setState({ persons: persons });
	};

	deleteNameHandler = (personIndex) => {
		const persons = [
			...this.state.persons
		];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render = () => {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => (
						<ErrorBoundary key={person.id}>
							<Person
								name={person.name}
								age={person.age}
								clicked={() => this.deleteNameHandler(index)}
								changed={(event) => this.switchNameHandler(event, person.id)}
							/>
						</ErrorBoundary>
					))}
				</div>
			);

			btnClass = classes.Red;
		}

		const new_class = [];

		if (this.state.persons.length <= 3) {
			new_class.push(classes.red);
		}
		if (this.state.persons.length <= 2) {
			new_class.push(classes.bold);
		}
		if (this.state.persons.length <= 1) {
			new_class.push(classes.font);
		}

		return (
			<div className={classes.App}>
				<h1>Comaecod's React App</h1>
				<p className={new_class.join(' ')}>This is cool!</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Name
				</button>
				{persons}
			</div>
		);
	};
}

export default App;
