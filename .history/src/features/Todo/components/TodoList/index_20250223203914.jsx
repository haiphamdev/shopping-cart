import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todoList: propTypes.array.isRequired,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList(props) {
  return <ul></ul>;
}

export default TodoList;
