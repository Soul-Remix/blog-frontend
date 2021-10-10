import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../../component/loader/loader';
import Post from '../../component/post/post';

import './postPage.css';

const fetchPosts = async (id) => {
  try {
    const res = await fetch(
      `https://guarded-bayou-18266.herokuapp.com/api/v1/post/${id}`
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const PostPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(`${id}`, () =>
    fetchPosts(id)
  );

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
    return <Post data={data} />;
  }
};

export default PostPage;
