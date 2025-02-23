import { Route } from 'react-router-dom';
import './App.scss';
import TodoFeature from './features/Todo';

function App() {
  return (
    <>
      Header
      <Route path='/todos' element={<TodoFeature />} />
      <Route path='/albums' element={<TodoFeature />} />
      Footer
    </>
  );
}

export default App;
