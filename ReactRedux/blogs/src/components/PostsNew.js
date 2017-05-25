import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  // arg field for usage for the Field comp
  // from redux-form
  // wat ... field.input
  // it contains a bunch of event handlers
  // we just saying we want all dem props.
  // instead of saying a bunch of shit like this.
  // onChange={field.input.onCHange}
  // one thing is much better.. prolly
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  // so first handleSubmit is a thing that comes from redux-form
  // basically it says hey if redux-form goes through and all is 
  // well then call the callback function that we make here.
  // also more annoying bind(this) bs so that we make sure
  // that this === component
  onSubmit(values) {
    // we get access to props.history because this is getting
    // rendered by the Route component
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

// values by convention
// all values entered into form.
// keyed by Field name - important names must match.
// doing a validate function adds field.meta.error
function validate(values) {
  const errors = {};

  // validate the inputs from 'values';
  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  // if errors is empty the form is fine to submit
  // if errors has any properties redux-form assumes form in invalid
  return errors;
}

// redux form yo.
// form: literally name of form
// also passing in validate function
// cuz maybe you have more than one form on page.
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  // getting kinda nutty in here.
  connect(null, { createPost })(PostsNew)
);