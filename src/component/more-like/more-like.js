import Card from '../card/card';

import './more-like.css';

const MoreLike = ({ posts }) => {
  return (
    <section className="more-container">
      <h3 className="more-header">More Posts:</h3>
      <div className="more-card-container">
        {posts.slice(3, 5).map((x) => {
          return (
            <Card
              title={x.title}
              image={x.image}
              comments={x.comments}
              id={x._id}
              key={x._id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MoreLike;
