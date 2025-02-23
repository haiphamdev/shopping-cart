import 'react';
import TodoList from './components/TodoList';

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
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
