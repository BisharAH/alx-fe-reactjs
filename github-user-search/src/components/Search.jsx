import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setUserData(null);
    setError(null);

    try {
      const user = await fetchUserData(username);
      setUserData(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      
      {loading && <p>Loading...</p>}
      
      {error && <p>Looks like we can't find the user</p>}
      
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="150" />
          <h2>{userData.name || userData.login}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile on GitHub
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;