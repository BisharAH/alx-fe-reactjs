// src/components/Blog.jsx
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        <li><Link to="/blog/post-1">First Blog Post</Link></li>
        <li><Link to="/blog/post-2">Second Blog Post</Link></li>
        <li><Link to="/blog/post-3">Third Blog Post</Link></li>
      </ul>
    </div>
  );
};

export default Blog;