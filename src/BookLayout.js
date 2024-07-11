import React, { useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const BookLayout = () => {
  // const [number, setNumber] = useState(3);
  const [searchParams, setSearchParams]  = useSearchParams({n: 3});
  const number = searchParams.get('n');
  // console.log(searchParams.get('n'));
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">Create Book</Link>
      <Outlet context={{text: 'hello world'}}/>
      <input type='number'
      value={number}
      onChange={(e) => setSearchParams({n:e.target.value})}
      />
    </>
  );
};

export default BookLayout;