import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor (props) {
		super(props);
		console.log('[App.js] constructor');
		this.state = {
			persons     : [
				{ id: 'vis1', name: 'Vishnu Vardhan', job: 'Developer' },
				{ id: 'vis2', name: 'Hina Raiba', job: 'Graphics Designer' },
				{ id: 'vis3', name: 'Shivendu Saurabh', job: 'Chartered Accountant' },
				{ id: 'vis4', name: 'Jayesh Badala', job: 'Gold Businessman' },
				{ id: 'vis5', name: 'Ashok Sethiya', job: 'Ticket Solver' },
				{ id: 'vis6', name: 'Sakshi Sangtani', job: 'Data Analyst' },
				{ id: 'vis7', name: 'Abdullah Sayyad', job: 'Marketing Counsellor' }
			],
			showPersons : false
		};
	}

	static getDerivedStateFromProps (props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// componentWillMount () {
	// 	console.log('[App.js] componentWillMount');
	// }

	componentDidMount () {
		console.log('[App.js] componentDidMount');
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => p.id === id);
		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [
			...this.state.persons
		];
		persons[personIndex] = person;
		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
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
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					cockpitTitle={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
	};
}

export default App;
