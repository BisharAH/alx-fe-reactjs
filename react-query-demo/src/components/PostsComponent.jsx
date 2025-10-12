import { useQuery } from 'react-query';

const fetchPosts = async () => {
  console.log('Fetching posts...'); // Added for demonstration
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const { 
    data, 
    error, 
    isLoading, 
    isError, 
    isFetching, 
    refetch 
  } = useQuery(
    'posts', 
    fetchPosts,
    {
      // Add the required options here
      staleTime: 5000, // 5 seconds
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

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