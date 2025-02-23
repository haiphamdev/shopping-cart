import 'react';
import TodoList from './components/TodoList';
import { useState } from 'react';

TodoFeature.propTypes = {};

function TodoFeature() {
  const initialTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'new',
    },
    {
      id: 3,
      title: 'Code',
      status: 'completed',
    },
  ];

  const [todoList, setTodoList] = useState(initialTodoList);
  const [filter, setFilter] = useState('all');

  function handleTodoClick(todo, index) {
    // console.log(todo, index);
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'completed' ? 'new' : 'completed',
    };

    setTodoList(newTodoList);
  }

  function handleShowAllClick() {
    setFilter('all');
  }

  function handleShowCompletedClick() {
    setFilter('completed');
  }

  function handleShowNewClick() {
    setFilter('new');
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
