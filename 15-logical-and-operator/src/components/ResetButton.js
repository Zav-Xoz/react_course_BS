function ResetButton({ style, click, count }) {
  return (
    <div>
      {!!count && (
        //  !SIMULAR OPTION {count > 0 && (
        <div>
          <button style={style} onClick={click}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default ResetButton;
