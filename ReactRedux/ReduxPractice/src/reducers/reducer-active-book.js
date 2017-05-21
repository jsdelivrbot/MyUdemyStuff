// state argument is not application state only the state
// this reducer is responsible for
// saying state is null is an es6 thing if state comes in undefined we set it instead to null
// because redux does not allow this to be passed around as undefined.
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}

// redux sends booting up actions through all the reducers
// so this piece of state is set to null
// remember this piece of state is not app state,
// its specific to this reducer.