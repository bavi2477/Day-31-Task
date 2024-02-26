import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';

const App = () => {
  const [bookId, setBookId] = useState(null)
  const [authorId, setAuthorId] = useState(null)
  return (
    <div>
      <BrowserRouter>
        <div className=' pt-3 pb-5container-fluid h-100'>
          <div className='row h-100'>
            <nav id='sidebar' className='col-md-3 col-lg-2 d-md-block bg-light sidebar'>
              <div className='position-sticky'>
              <h3>My Dashboard</h3>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link'>Dashboard</Link>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link to='/other' className='nav-link dropdown toggle' id='otherDropdown' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false' >Add</Link>
                    <div className='dropdown-menu' aria-labelledby='otherDropdown'>
                      <Link to='/add/addbook' className='dropdown-item'>Book</Link>
                      <Link to='/add/addauthor' className='dropdown-item'>Author</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

            <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4 h-100'>
              <Routes>
                <Route path='/' element={<Dashboard setBookId = {setBookId} setAuthorId = {setAuthorId} />} />
                <Route path='/add/addbook' element={<AddBook />} />
                <Route path='/add/addauthor' element={<AddAuthor />} />
                {bookId !== null && (
                  <Route path='/edit/editbook/:id' element={<EditBook bookId = {bookId} />} />
                )}
                {authorId !== null && (
                  <Route path='/edit/editauthor/:id' element={<EditAuthor authorId = {authorId} />} />
                )}
              </Routes>

            </main>

          </div>

        </div>

      </BrowserRouter>

    </div>
  );
};

export default App;