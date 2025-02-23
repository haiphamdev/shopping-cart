import { Route, Routes } from 'react-router-dom';
import './App.scss';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <>
      Header
      <Routes>
        <Route path='/todos' element={<TodoFeature />} />
        <Route path='/albums' element={<AlbumFeature />} />
      </Routes>
      Footer
    </>
  );
}

export default App;
