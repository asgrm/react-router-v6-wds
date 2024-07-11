import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: 'Not found error'
      })
    }, 1000);
  }, []);

  return (
      <h1>
        NotFound
      </h1>
  );
};

export default NotFound;