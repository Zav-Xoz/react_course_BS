import { useState, useEffect } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     // fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       // console.log(posts);
  //       setPosts(posts);
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // -------------------------  if (isLoading) {
  //  -------------------------     return <h1>Loading...</h1>;
  // -------------------------    }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>POSTS</h1>
      <hr />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post) => <Post {...post} key={post.id} />)
      )}
    </>
  );
}

export default Posts;
