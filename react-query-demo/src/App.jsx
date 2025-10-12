import PostsComponent from './PostsComponent';
import { ReactQueryDevtools } from 'react-query-devtools';
import './App.css';

function App() {
  return (
    <div className="App">
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;