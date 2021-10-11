import React from 'react';

import Social from '../social/social';

import './post.css';

const Post = ({ data }) => {
  const { title, description, image, author, createdAt } = data;
  const body = description.split('\\n');
  const bodyArr = body.map((x, i) => {
    return (
      <p key={i} className="post-body">
        {x}
      </p>
    );
  });
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
        {bodyArr}
      </div>
    </div>
  );
};

export default Post;
