import './Post.css';
function Post({ userId, id, title, body }) {
  //   console.log(props);
  //   const { userId, id, title, body } = prors;
  return (
    <div className="post">
      <small>Post ID : {id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h4>Post User : {userId}</h4>
    </div>
  );
}

export default Post;
