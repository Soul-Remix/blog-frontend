import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import Card from '../../component/card/card';
import Loader from '../../component/loader/loader';

import './mainPage.css';

const fetchPosts = async (pageNum) => {
  try {
    const res = await fetch(
      `https://guarded-bayou-18266.herokuapp.com/api/v1/posts?page=${pageNum}`
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const { isLoading, isError, data, error } = useQuery(
    ['posts', page],
    () => fetchPosts(page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (data) {
      setPosts((old) => old.concat(data.posts));
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="center-container">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (data) {
    const hasMore = data.totalItems / 10 > page;
    const postsArr = posts.map((x) => {
      return (
        <Card
          title={x.title}
          image={x.image}
          comments={x.comments}
          key={x._id}
        />
      );
    });
    return (
      <div className="container">
        {postsArr}
        {hasMore && (
          <button
            className="more-button"
            onClick={() => setPage((old) => (old += 1))}
          >
            Load More
          </button>
        )}
      </div>
    );
  }
};

export default MainPage;
