import { Route } from 'react-router-dom';
import './App.scss';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <>
      Header
      <Route path='/todos' element={<TodoFeature />} />
      <Route path='/albums' element={<AlbumFeature />} />
      Footer
    </>
  );
}

export default App;
