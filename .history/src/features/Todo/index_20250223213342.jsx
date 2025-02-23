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

  function handleTodoClick(todo, index) {
    // console.log(todo, index);
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'completed' ? 'new' : 'completed',
    };

    setTodoList(newTodo);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
