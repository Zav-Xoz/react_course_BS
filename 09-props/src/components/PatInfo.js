// function PetInfo(props) {
//   console.log(props);
//   const {animal, age} = props;
function PetInfo({ animal, age }) {
  return (
    <h1>
      My {animal} is {age} years old
    </h1>
  );
}

export default PetInfo;
