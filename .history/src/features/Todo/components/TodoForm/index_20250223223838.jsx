import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

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

    if (!onSubmit) return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);
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
