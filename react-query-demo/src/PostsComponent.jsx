import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Destructure refetch and isFetching from useQuery
  const { data, error, isLoading, isFetching, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts {isFetching && <small>(Updating...)</small>}</h1>
      <button onClick={() => refetch()}>
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;