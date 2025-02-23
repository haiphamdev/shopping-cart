import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todoList: propTypes.array.isRequired,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
