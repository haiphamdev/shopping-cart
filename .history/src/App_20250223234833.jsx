import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <>
      Header
      <p>
        <Link to='/todos'>Todos</Link>
      </p>
      <Routes>
        <Route path='/todos' element={<TodoFeature />} />
        <Route path='/albums' element={<AlbumFeature />} />
      </Routes>
      Footer
    </>
  );
}

export default App;
