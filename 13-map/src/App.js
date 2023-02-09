import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const textsButtons = [
  'Click me!',
  'Press me!',
  'Click me Please!',
  'Press me Please!',
  'Click me again!',
  'Press me again!',
];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {textsButtons.map((text, index) => {
        return (
          <Button onClick={incrementCount} textButton={text} key={index} />
        );
      })}

      {/* {[
        <Button onClick={incrementCount} textButton={textsButtons[0]} />,
        <Button onClick={incrementCount} textButton={textsButtons[1]} />,
        <Button onClick={incrementCount} textButton={textsButtons[2]} />,
        <Button onClick={incrementCount} textButton={textsButtons[3]} />,
      ]} */}
    </div>
  );
}

export default App;
