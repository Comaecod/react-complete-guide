import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClassAnother from '../hoc/withClassAnother';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
	constructor (props) {
		super(props);
		console.log('[App.js] constructor');
		this.state = {
			persons       : [
				{ id: 'vis1', name: 'Vishnu Vardhan', job: 'Developer' },
				{ id: 'vis2', name: 'Hina Raiba', job: 'Graphics Designer' },
				{ id: 'vis3', name: 'Shivendu Saurabh', job: 'Chartered Accountant' },
				{ id: 'vis4', name: 'Jayesh Badala', job: 'Gold Businessman' },
				{ id: 'vis5', name: 'Ashok Sethiya', job: 'Ticket Solver' },
				{ id: 'vis6', name: 'Sakshi Sangtani', job: 'Data Analyst' },
				{ id: 'vis7', name: 'Abdullah Sayyad', job: 'Marketing Counsellor' }
			],
			showPersons   : false,
			showCockpit   : true,
			counter       : 0,
			authenticated : false
		};
	}

	static getDerivedStateFromProps (props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount () {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate () {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate () {
		console.log('[App.js] componentDidUpdate');
	}

	toggleCockpitHandler = () => {
		const doesShow = this.state.showCockpit;
		this.setState({ showCockpit: !doesShow });
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => p.id === id);
		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [
			...this.state.persons
		];
		persons[personIndex] = person;

		// this.setState({
		// 	persons : persons,
		// 	counter : this.state.counter + 1
		// });

		// This is a better approach for updating the state corerctly. The one below:

		this.setState((prevState, props) => {
			return {
				persons : persons,
				counter : prevState.counter + 1
			};
		});
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

	loginHandler = () => {
		this.setState({ authenticated: true });
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
			<Aux>
				<button onClick={this.toggleCockpitHandler}>Toggle Cockpit</button>
				<AuthContext.Provider
					value={{
						authenticated : this.state.authenticated,
						login         : this.loginHandler
					}}>
					{
						this.state.showCockpit ? <Cockpit
							cockpitTitle={this.props.appTitle}
							showPersons={this.state.showPersons}
							personsLength={this.state.persons.length}
							clicked={this.togglePersonsHandler}
						/> :
						null}
					{persons}
				</AuthContext.Provider>
			</Aux>
		);
	};
}

export default withClassAnother(App, classes.App);
