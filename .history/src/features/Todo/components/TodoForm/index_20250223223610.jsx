import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultValue = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState('');

  function handleChangeValue(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChangeValue} />
      </form>
    </div>
  );
}

export default TodoForm;
