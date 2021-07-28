import React, { useEffect, useState } from 'react';

import useAuthStore from '../stores/use-auth';

import { Link, useHistory } from 'react-router-dom';

export default function Stores() {
  const { email, logout, isAuthenticated } = useAuthStore();
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);
  const [stores, setStores] = useState([]);

  async function getStores() {
    await fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setStores(data));
  }

  useEffect(() => {
    getStores();
  }, []);
  return (
    <div>
      <Link to={'/login'}>Login</Link>
      <button
        onClick={() => {
          logout();
          history.push('/');
        }}
      >
        Logout
      </button>
      <div>Email: {email}</div>
      {stores.map((store) => (
        <>
        <div>{store.name}</div>
        <img src={`${store.imageUrl}`} />
        </>
      ))}
    </div>
  );
}
