const fetchPost = async (id) => {
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

export default fetchPost;
