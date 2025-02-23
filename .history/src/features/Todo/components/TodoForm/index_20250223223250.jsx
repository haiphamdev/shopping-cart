import React from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultValue = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  return <div>
    <form>
        <input type='text' value={} />
    </form>
  </div>;
}

export default TodoForm;
