import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: 'asdfas', name: 'Max', age: 28 },
      { id: ';lkj', name: 'manu', age: 29 },
      { id: 'poiu', name: 'steph', age: 26 }
    ],
    otherState: 'some other value',
    userName: 'default',
    showPersons: false,
    'asdf': {
      id: 'asdf', name: 'Max', age: 29
    },
    ';lkj': {
      id: ';lkj', name: 'eh', age: 3212
    }
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  // interesting note, Max bro is claiming that the bind syntax for passing
  // a handler style method to something like onClick is more efficient? faster?
  // than using the function invocation syntax like this: () => this.someHandler(args)

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age} />)}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">

        <UserInput changed={this.userNameChangedHandler} userName={this.state.userName} />

        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />

        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>this is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}


        {/* {this.state.persons.map((p, i) => <Person key={i} name={p.name} age={p.age} />)} */}
      </div>

    );

    // return React.createElement('div',
    //   { className: 'App' },
    //   React.createElement('h1',
    //     null,
    //     'does this work now'));
  }
}

export default App;
