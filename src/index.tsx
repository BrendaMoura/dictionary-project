import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchWord from './react/screens/SearchWord';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchWord />
  </React.StrictMode>
);
