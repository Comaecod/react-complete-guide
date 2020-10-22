import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {name: 'Vishnu', age: 22},
      {name: 'Hina', age: 21},
      {name: 'Shivendu', age: 23},
      {name: 'JAVA', age: 25}
    ]
  }

  render() {
    return (
      <div class="App">        
        <h1>Comaecod's React Application</h1>
        <p>This is cool!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>  
    );
  }
}

export default App;
