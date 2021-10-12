const fetchPosts = async () => {
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

export default fetchPosts;
