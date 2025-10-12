// src/components/Blog.jsx
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
 <div>
      {/* And change these lines 👇 */}
      <h3>Blog Post: {id}</h3>
      <p>This is the content for blog post with ID: <strong>{id}</strong>.</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
};

export default Blog;