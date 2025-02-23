import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <>
      Header
      {/* <p>
        <Link to='/todos'>Todos</Link>
      </p>
      <p>
        <Link to='/albums'>Albums</Link>
      </p> */}
      <p>
        <NavLink to='/todos'>Todos</NavLink>
      </p>
      <p>
        <NavLink to='/albums'>Albums</NavLink>
      </p>
      <Routes>
        <Route path='/' element={<TodoFeature />} />
        {/* <Route path='/todos' element={<TodoFeature />} /> */}
        <Route path='/albums' element={<AlbumFeature />} />
      </Routes>
      Footer
    </>
  );
}

export default App;
