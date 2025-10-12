import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';
import { ReactQueryDevtools } from 'react-query-devtools';
import './App.css';

// 1. Create the query client here
const queryClient = new QueryClient();

function App() {
  return (
    // 2. Wrap your components with the QueryClientProvider here
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PostsComponent />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;