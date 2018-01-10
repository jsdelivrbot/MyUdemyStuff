import React, { Component } from 'react';
import myStyles from './App.css';
import Person from '../components/Persons/Person/Person';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
      <div className={myStyles.App}>

        <UserInput changed={this.userNameChangedHandler} userName={this.state.userName} />

        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />

        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

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
