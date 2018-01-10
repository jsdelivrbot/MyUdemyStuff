import React from 'react';

const userInput = props => {
  const style = {
    color: 'red',
    margin: '10px'
  }

  return (
    <div className={style}>
      <input type="text"
        onChange={props.changed}
        value={props.userName} />
    </div>
  )
}

export default userInput;