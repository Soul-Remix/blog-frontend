import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './component/navbar/navbar';

import MainPage from './pages/main/mainPage';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <MainPage />
      </Route>
    </>
  );
}

export default App;
