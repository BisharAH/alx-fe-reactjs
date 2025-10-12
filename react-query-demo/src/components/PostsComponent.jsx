import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // 1. Add `isError` to the destructuring
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // 2. Change the condition to use `isError`
  if (isError) {
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