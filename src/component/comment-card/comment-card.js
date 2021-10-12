import './comment-card.css';

const CommentCard = ({ comments }) => {
  const commentsArr = comments.map((comment) => {
    return (
      <div className="comment-card" key={comment._id}>
        <div className="comment-flex">
          <p className="comment-user">{comment.userName}</p>
          <small className="comment-date">{comment.createdAt}</small>
        </div>
        <p className="comment-body">{comment.description}</p>
      </div>
    );
  });
  return commentsArr;
};

export default CommentCard;
