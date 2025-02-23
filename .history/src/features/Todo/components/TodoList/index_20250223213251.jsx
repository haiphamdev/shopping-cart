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
  function handleClick(todo, idx) {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  }

  return (
    <ul className='todo-list'>
      {todoList.map((item, idx) => (
        <li
          key={item.id}
          className={classnames({
            completed: item.status === 'completed',
          })}
          onClick={() => handleClick(item, idx)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
