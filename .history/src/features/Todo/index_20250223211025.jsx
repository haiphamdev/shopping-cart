import 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature() {
  const todoList = [
    {
      id: 1,
      title: 'Eat',
    },
    {
      id: 2,
      title: 'Sleep',
    },
    {
      id: 3,
      title: 'Code',
    },
  ];
  return (
    <div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
