import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoFeature from './features/Todo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoFeature />
    </>
  );
}

export default App;
