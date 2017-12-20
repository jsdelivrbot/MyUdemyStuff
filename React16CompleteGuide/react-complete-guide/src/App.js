import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'steph', age: 26 }
    ],
    otherState: 'some other value',
    userName: 'default'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked yo');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'manu', age: 29 },
        { name: 'stef', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'stef', age: 27 }
      ]
    })
  }

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  // interesting note, Max bro is claiming that the bind syntax for passing
  // a handler style method to something like onClick is more efficient? faster?
  // than using the function invocation syntax like this: () => this.someHandler(args)

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">

        <UserInput changed={this.userNameChangedHandler} userName={this.state.userName} />

        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />

        <h1>Hi, I'm a React App</h1>
        <p>this is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Yoyoyoyoeyeyyyey')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'max!!!!')}
          changed={this.nameChangedHandler}>Hobbies: racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

        {this.state.persons.map((p, i) => <Person key={i} name={p.name} age={p.age} />)}
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
