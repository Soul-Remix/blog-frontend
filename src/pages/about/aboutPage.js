import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import Loader from '../../component/loader/loader';

import './aboutPage.css';

const fetchRecent = async () => {
  const res = await fetch(
    `https://guarded-bayou-18266.herokuapp.com/api/v1/posts`
  );
  const data = res.json();
  if (res.status == 200) {
    return data;
  } else {
    throw new Error(res.statusText);
  }
};

const AboutPage = () => {
  const { data, isLoading, isError, error } = useQuery('about', fetchRecent);
  if (isLoading) {
    return (
      <div className="center-container">
        <Loader />
      </div>
    );
  }
  if (data) {
    return (
      <div className="about-container">
        <section className="about">
          <p className="about-header">About</p>
          <hr className="about-hr" />
          <p className="about-body">
            The Movie Blog is (are you ready for this?) a blog about movies.
          </p>
          <p className="about-body">
            This is not a news site per se (although you’ll get a lot of news
            here), but rather a place to give thoughts and opinions on movies
            and movie news. A pundit site if you will for the Movie Industry.
          </p>
        </section>
        <section className="recent">
          <h2>Recent Posts</h2>
          {data.posts.slice(0, 4).map((x) => {
            return (
              <Link className="recent-link" to={`/post/${x._id}`} key={x._id}>
                {x.title}
              </Link>
            );
          })}
        </section>
      </div>
    );
  }
};

export default AboutPage;