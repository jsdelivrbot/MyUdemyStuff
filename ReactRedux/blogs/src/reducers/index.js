import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './PostsReducer';

// important to put redux-form on form:
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
