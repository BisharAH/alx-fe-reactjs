import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing App 🍳</h1>
      </header>
      <main>
        <AddRecipeForm />
        <hr />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;