import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../../component/loader/loader';
import Post from '../../component/post/post';
import CommentForm from '../../component/comment-form/comment-form';

import validator from '../../utils/validator';

import './postPage.css';
import AddComment from '../../component/add-comment/add-comment';
import CommentCard from '../../component/comment-card/comment-card';

const fetchPosts = async (id) => {
  const res = await fetch(
    `https://guarded-bayou-18266.herokuapp.com/api/v1/post/${id}`
  );
  const data = await res.json();
  if (res.status === 200) {
    return data;
  } else {
    throw new Error(data.message);
  }
};

const PostPage = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [writeComment, setWriteComment] = useState(false);
  const [commentError, setCommentError] = useState('');
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

  const showCommentForm = () => {
    setWriteComment((old) => !old);
  };

  const submitComment = async (e, userName, description) => {
    e.preventDefault();
    const res = await fetch(
      `https://guarded-bayou-18266.herokuapp.com/api/v1/post/${id}/comment`,
      {
        method: 'PUT',
        body: JSON.stringify({
          userName,
          description,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const comment = await res.json();
    if (res.status === 200) {
      data.comments.push(comment.comment);
      setCommentError('');
      setUserName('');
      setDescription('');
      setWriteComment(false);
      return;
    } else if (res.status === 500) {
      setCommentError(res.statusText);
      console.log(commentError);
      return;
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
    return <h1>{error.message}</h1>;
  }
  if (data) {
    return (
      <>
        <Post data={data} />
        <div className="comments-container" id="comments">
          <AddComment
            length={data.comments.length}
            showComment={showCommentForm}
          />
          {writeComment && (
            <CommentForm
              userName={userName}
              userNameError={userNameError}
              description={description}
              descriptionError={descriptionError}
              onInputChange={onInputChange}
              submitComment={submitComment}
              commentError={commentError}
            />
          )}
          <CommentCard comments={data.comments} />
        </div>
      </>
    );
  }
};

export default PostPage;
