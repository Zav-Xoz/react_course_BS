const App = ({ initialsButtonText, initialsClassesList }) => {
  // const App = (props) => {
  //   console.log(props);
  //   const { initialsButtonText, initialsClassesList } = props;

  const [buttonText, setButtonText] = React.useState(initialsButtonText);
  const [classesList, setClassesList] = React.useState(initialsClassesList);

  const onButtonClick = () => {
    setButtonText(`Hello From React!`);
    setClassesList('green-btn');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app-container');
const root = ReactDOM.createRoot(container);
root.render(
  <App
    initialsButtonText="Click Me Please ..."
    initialsClassesList="style-default"
  />
);
