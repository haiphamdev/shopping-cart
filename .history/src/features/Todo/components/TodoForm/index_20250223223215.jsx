import React from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultValue = {
  onSubmit: null,
};

function TodoForm(props) {
  return <div></div>;
}

export default TodoForm;
