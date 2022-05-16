import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import '../src/styles/global.css';

import Header from './components/Header/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
