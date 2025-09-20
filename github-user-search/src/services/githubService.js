// import axios from 'axios';

// const GITHUB_API_BASE_URL = 'https://api.github.com';

// /**
//  * Fetches user data from the GitHub API.
//  * @param {string} username The GitHub username to search for.
//  * @returns {Promise<object>} A promise that resolves with the user data.
//  */
// export const fetchUserData = async (username) => {
//   try {
//     const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       throw new Error('User not found.');
//     } else {
//       throw new Error('An error occurred while fetching data.');
//     }
//   }
// };

// import axios from 'axios';

// const GITHUB_API_BASE_URL = 'https://api.github.com';

// /**
//  * Searches for GitHub users based on various criteria.
//  * @param {string} query The main search query (username or keyword).
//  * @param {string} location The location to filter by.
//  * @param {number} minRepos The minimum number of repositories.
//  * @returns {Promise<Array>} A promise that resolves with an array of user data.
//  */
// export const fetchUsers = async (query, location, minRepos) => {
//   let queryString = `q=${query}`;

//   if (location) {
//     queryString += `+location:${location}`;
//   }

//   if (minRepos) {
//     queryString += `+repos:>=${minRepos}`;
//   }

//   try {
//     const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?${queryString}`);
//     return response.data.items;
//   } catch (error) {
//     if (error.response && error.response.status === 422) {
//       throw new Error('Validation failed. Please check your search parameters.');
//     } else {
//       throw new Error('An error occurred while fetching users.');
//     }
//   }
// };


import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

/**
 * Searches for GitHub users based on various criteria.
 * @param {string} query The main search query (username or keyword).
 * @param {string} location The location to filter by.
 * @param {number} minRepos The minimum number of repositories.
 * @returns {Promise<Array>} A promise that resolves with an array of user data.
 */
export const fetchUsers = async (query, location, minRepos) => {
  let queryString = `q=${query}`;

  if (location) {
    queryString += `+location:${location}`;
  }

  if (minRepos) {
    queryString += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?${queryString}`);
    return response.data.items;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      throw new Error('Validation failed. Please check your search parameters.');
    } else {
      throw new Error('An error occurred while fetching users.');
    }
  }
};