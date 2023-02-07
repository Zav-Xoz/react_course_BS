import './App.css';
import PetInfo from './components/PatInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="2" hasPet />
      <PetInfo animal="dog" age="4" hasPet={false} />
    </div>
  );
}

export default App;
