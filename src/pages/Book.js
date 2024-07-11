import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

const Book = () => {
  const params = useParams();
  const obj = useOutletContext()
  return (
    <h1>
      Book {params.id} {obj.text}
    </h1>
  );
};

export default Book;