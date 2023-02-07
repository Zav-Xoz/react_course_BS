function PetInfo({ animal, age, hasPet }) {
  // !!!!!!!! EXEMPLE FIRST !!!!!!!!!
  // const outText = hasPet
  //   ? ` My ${animal} is ${age} years old`
  //   : "I don't have an animal";

  // return <h1>{outText}</h1>;

  // !!!!!!!! EXEMPLE TWO !!!!!!!!!
  return hasPet ? (
    // <h1> {` My ${animal} is ${age} years old`}</h1>
    <h2>
      My {animal} is {age} years old
    </h2>
  ) : (
    <h2> I don't have an animal </h2>
  );
}

export default PetInfo;
