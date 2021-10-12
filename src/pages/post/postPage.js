import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../../component/loader/loader';
import Post from '../../component/post/post';
import CommentForm from '../../component/comment-form/comment-form';

import validator from '../../utils/validator';

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
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const { isLoading, isError, data, error } = useQuery(
    `${id}`,
    () => fetchPosts(id),
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
    }
  );

  const onInputChange = (e) => {
    if (e.target.name === 'userName') {
      setUserName(e.target.value);
      const nameError = validator.nameValidator(e);
      if (nameError) {
        setUserNameError(nameError);
      }
      if (!nameError) {
        setUserNameError('');
      }
    } else if (e.target.name === 'description') {
      setDescription(e.target.value);
      const descError = validator.descriptionValidator(e);
      if (descError) {
        setDescriptionError(descError);
      }
      if (!descError) {
        setDescriptionError('');
      }
    }
  };

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
    return (
      <>
        <Post data={data} />
        <CommentForm
          userName={userName}
          userNameError={userNameError}
          description={description}
          descriptionError={descriptionError}
          onInputChange={onInputChange}
        />
      </>
    );
  }
};

export default PostPage;
