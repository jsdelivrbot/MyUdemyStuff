import React from 'react';

import classes from './Cockpit.css';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPerson) {
    btnClass = assignedClasses.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(assignedClasses.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(assignedClasses.bold);
  }

  return (
    <div className={assignedClasses.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>this is really working</p>
      <button
        className={props.btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
}

export default cockpit;