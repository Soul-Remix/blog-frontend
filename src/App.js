import React from 'react';
import { Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import Navbar from './component/navbar/navbar';

import MainPage from './pages/main/mainPage';
import PostPage from './pages/post/postPage';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
      </QueryClientProvider>
    </>
  );
}

export default App;
