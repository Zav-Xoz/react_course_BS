import { useState } from 'react';
import generateRandomNumber from '../utils/generateRandomNumber';

function RandomNamber({ maxNum }) {
  const [randomNumber, setRandomNumber] = useState(
    generateRandomNumber(maxNum)
  );
  const changeRandomNum = () => {
    setRandomNumber(generateRandomNumber(maxNum));
  };

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomNamber;
