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

  function handleTodoClick(index) {
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'completed' ? 'new' : 'completed',
    };
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} onClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
