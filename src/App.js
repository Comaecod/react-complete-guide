import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons : [
			{ name: 'Vishnu', age: 22 },
			{ name: 'Hina', age: 21 },
			{ name: 'Shivendu', age: 23 },
			{ name: 'JAVA', age: 25 }
		]
	};

	styleObj = {
		backgroundColor : 'white',
		font            : 'inherit',
		border          : '2px solid red',
		padding         : '8px',
		cursor          : 'pointer'
	};

	switchNameHandler = (newName) => {
		this.setState({
			persons : [
				{ name: newName, age: 22 },
				{ name: 'Hina', age: 21 },
				{ name: 'Shivendu', age: 23 },
				{ name: 'JAVA', age: 35 }
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons : [
				{ name: event.target.value, age: 22 },
				{ name: 'Hina', age: 21 },
				{ name: 'Shivendu', age: 23 },
				{ name: 'JAVA', age: 35 }
			]
		});
	};

	render = () => (
		<div className='App'>
			<h1>Comaecod's React Application</h1>
			<p>This is cool!</p>
			<button style={this.styleObj} onClick={this.switchNameHandler.bind(this, 'Comaecod')}>
				Switch Name
			</button>
			<Person
				name={this.state.persons[0].name}
				age={this.state.persons[0].age}
				changed={this.nameChangedHandler}
			/>
			<Person
				name={this.state.persons[1].name}
				age={this.state.persons[1].age}
				click={() => this.switchNameHandler('ComaecodNew')}
			/>
			<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			<Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
		</div>
	);
}

export default App;
