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
  return (
    <div>
      <form>
        <input type='text' value={value} />
      </form>
    </div>
  );
}

export default TodoForm;
