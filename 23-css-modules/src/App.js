import './App.css';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App components heading</h1>
        <button className="my-button">App component button </button>
      </div>
    </div>
  );
}

export default App;
