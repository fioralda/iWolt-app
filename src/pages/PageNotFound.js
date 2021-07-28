import React from 'react';
import { useHistory } from 'react-router';

export default function PageNotFound() {
  const history = useHistory();
  return (
    <div>
      Page not found!
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Home page
      </button>
    </div>
  );
}
