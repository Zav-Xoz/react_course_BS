import './App.css';
import PetInfo from './components/PatInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="2" />
      <PetInfo animal="dog" age="4" />
    </div>
  );
}

export default App;
