// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import AddRecipeForm from './components/AddRecipeForm';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import SearchBar from './components/SearchBar';

// function App() {
//   return (
//     <BrowserRouter>
//       <h1>Recipe Sharing App</h1>
//       <SearchBar />
//       <nav><Link to="/">Home</Link></nav>

//       <Routes>
//         <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <nav><Link to="/">Home</Link></nav>

      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;