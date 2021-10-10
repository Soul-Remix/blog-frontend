import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';

const Card = ({ title, image, comments }) => {
  return (
    <Link to={`/posts/${title}`} className="card">
      <figure className="card-fig">
        <img
          src={'https://guarded-bayou-18266.herokuapp.com/' + image}
          alt={title}
          className="card-image"
        />
        <figcaption className="card-comments">
          <span>
            <svg
              version="1.1"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              aria-hidden="true"
              className="symbol-comments"
            >
              <path d="M22 12q0 2.172-1.469 4.016t-4.008 2.914-5.523 1.070q-1.344 0-2.75-0.25-1.937 1.375-4.344 2-0.562 0.141-1.344 0.25h-0.047q-0.172 0-0.32-0.125t-0.18-0.328q-0.016-0.047-0.016-0.102t0.008-0.102 0.031-0.094l0.039-0.078t0.055-0.086 0.063-0.078 0.070-0.078 0.063-0.070q0.078-0.094 0.359-0.391t0.406-0.461 0.352-0.453 0.391-0.602 0.32-0.688q-1.937-1.125-3.047-2.766t-1.109-3.5q0-2.172 1.469-4.016t4.008-2.914 5.523-1.070 5.523 1.070 4.008 2.914 1.469 4.016zM28 16q0 1.875-1.109 3.508t-3.047 2.758q0.156 0.375 0.32 0.688t0.391 0.602 0.352 0.453 0.406 0.461 0.359 0.391q0.016 0.016 0.063 0.070t0.070 0.078 0.063 0.078 0.055 0.086l0.039 0.078t0.031 0.094 0.008 0.102-0.016 0.102q-0.047 0.219-0.203 0.344t-0.344 0.109q-0.781-0.109-1.344-0.25-2.406-0.625-4.344-2-1.406 0.25-2.75 0.25-4.234 0-7.375-2.063 0.906 0.063 1.375 0.063 2.516 0 4.828-0.703t4.125-2.016q1.953-1.437 3-3.313t1.047-3.969q0-1.203-0.359-2.375 2.016 1.109 3.187 2.781t1.172 3.594z"></path>
            </svg>
          </span>
          {comments.length}
        </figcaption>
      </figure>
      <p className="card-title">{title}</p>
    </Link>
  );
};

export default Card;
