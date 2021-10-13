import React from 'react';
import { useInfiniteQuery } from 'react-query';

import Card from '../../component/card/card';
import Loader from '../../component/loader/loader';
import Error from '../../component/error/error';

import './mainPage.css';

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://guarded-bayou-18266.herokuapp.com/api/v1/posts?page=${pageParam}`
  );
  const data = await res.json();
  if (res.status === 200) {
    return data;
  } else {
    throw new Error(data.message);
  }
};

const MainPage = () => {
  const { data, error, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery('posts', fetchPosts, {
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.nextPage : false,
    });

  if (isLoading) {
    return (
      <div className="center-container">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  if (data) {
    const postsArr = data.pages.map((page) => {
      return page.posts.map((x) => {
        return (
          <Card
            title={x.title}
            image={x.image}
            comments={x.comments}
            id={x._id}
            key={x._id}
          />
        );
      });
    });
    return (
      <div className="container">
        {postsArr}
        {hasNextPage && (
          <button className="more-button" onClick={() => fetchNextPage()}>
            Load More
          </button>
        )}
      </div>
    );
  }
};

export default MainPage;
