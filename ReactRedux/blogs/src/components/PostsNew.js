import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

// values by convention
// all values entered into form.
// keyed by Field name
function validate(values) {
  const errors = {};

  // validate the inputs from 'values';
  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.title = 'Enter some categories!';
  }

  if (!values.content) {
    errors.title = 'Enter some content!';
  }

  // if errors is empty the form is fine to submit
  // if errors has any properties redux-form assumes form in invalid
  return errors;
}

// redux form yo.
// form: literally name of form
// cuz maybe you have more than one form on page.
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);