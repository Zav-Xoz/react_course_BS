import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the Wrapper</h2>
      </Wrapper>
      <Wrapper color="red">
        <h2>Text Two inside of the Wrapper</h2>
        <button>Click Me!</button>
      </Wrapper>
    </div>
  );
}

export default App;
