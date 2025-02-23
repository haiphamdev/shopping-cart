import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todoList: propTypes.array.isRequired,
};

function TodoList(props) {
  return <ul></ul>;
}

export default TodoList;
