import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>React Form Handling</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;