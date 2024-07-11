import React from 'react';
import {
  Routes,
  Route,
  // Link,
  NavLink,
  useLocation,
  // useRoutes,
} from 'react-router-dom';
import Home from './pages/Home';
import './styles.css';

import NotFound from './pages/NotFound';

import { BookRoutes } from './BookRoutes';

function App() {
  const location = useLocation();
  console.log(location);
  // let element = useRoutes([
  //   {
  //     path: '',
  //     element: <Home/>
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound/>
  //   }
  // ])
  return (
    <>
      <Routes>
        <Route location="/books" element={<h1>Extra content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li><NavLink state='hi' to="/" end >
            {({isActive})=>isActive ? 'Active Home' : 'Home' }
          </NavLink></li>
          <li><NavLink to="/books" end>Books</NavLink></li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>

  );
}

export default App;
