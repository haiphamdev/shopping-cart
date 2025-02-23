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

  return (
    <div>
      <form>
        <input type='text' value={value} onChange={handleChangeValue} />
      </form>
    </div>
  );
}

export default TodoForm;
