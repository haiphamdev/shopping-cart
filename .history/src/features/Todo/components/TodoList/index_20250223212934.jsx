import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';
import classnames from 'classnames';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  return (
    <ul className='todo-list'>
      {todoList.map((item) => (
        <li
          key={item.id}
          className={classnames({
            completed: item.status === 'completed',
          })}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
