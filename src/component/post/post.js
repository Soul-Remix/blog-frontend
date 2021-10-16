import React from 'react';

import Social from '../social/social';

import './post.css';

const Post = ({ data }) => {
  const { title, description, image, author, createdAt } = data;
  const createMarkup = () => {
    return { __html: description };
  };
  return (
    <div className="post-container">
      <figure className="post-fig">
        <img
          src={'https://guarded-bayou-18266.herokuapp.com/' + image}
          alt={title}
          className="post-image"
        />
        <figcaption className="post-header">{title}</figcaption>
      </figure>
      <p className="post-by">
        By <span className="post-author">{author.userName}</span> on {createdAt}
      </p>
      <hr />
      <div className="post-grid">
        <Social />
        <article
          className="post-body"
          dangerouslySetInnerHTML={createMarkup()}
        ></article>
      </div>
    </div>
  );
};

export default Post;
