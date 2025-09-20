// import React, { useState } from 'react';
// import { fetchUserData } from '../services/githubService';

// const Search = () => {
//   const [username, setUsername] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setUserData(null);
//     setError(null);

//     try {
//       const user = await fetchUserData(username);
//       setUserData(user);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter GitHub username"
//         />
//         <button type="submit">Search</button>
//       </form>
      
//       {loading && <p>Loading...</p>}
      
//       {error && <p>Looks like we cant find the user</p>}
      
//       {userData && (
//         <div>
//           <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="150" />
//           <h2>{userData.name || userData.login}</h2>
//           <p>
//             <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
//               View Profile on GitHub
//             </a>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

// import React, { useState } from 'react';
// import { fetchUsers } from '../services/githubService';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [location, setLocation] = useState('');
//   const [repos, setRepos] = useState('');
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setUsers([]);
//     setError(null);
//     try {
//       const results = await fetchUsers(query, location, repos);
//       setUsers(results);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Username or keyword"
//           className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
//         />
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           placeholder="Location (e.g., Nigeria)"
//           className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
//         />
//         <input
//           type="number"
//           value={repos}
//           onChange={(e) => setRepos(e.target.value)}
//           placeholder="Min. Repositories"
//           className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors w-full md:w-auto">
//           Search
//         </button>
//       </form>
      
//       {loading && <p className="text-center text-gray-500">Loading...</p>}
      
//       {error && <p className="text-center text-red-500">Looks like we can't find any users matching your criteria.</p>}
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {users.length > 0 && users.map((user) => (
//           <div key={user.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
//             <img 
//               src={user.avatar_url} 
//               alt={`${user.login} avatar`} 
//               className="w-24 h-24 rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">{user.login}</h3>
//             <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//               View Profile
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setUsers([]);
    setError(null);
    try {
      const results = await fetchUsers(query, location, repos);
      setUsers(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Username or keyword"
          className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g., Nigeria)"
          className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
        />
        <input
          type="number"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          placeholder="Min. Repositories"
          className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors w-full md:w-auto">
          Search
        </button>
      </form>
      
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      
      {error && <p className="text-center text-red-500">Looks like we can't find any users matching your criteria.</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.length > 0 && users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img 
              src={user.avatar_url} 
              alt={`${user.login} avatar`} 
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;