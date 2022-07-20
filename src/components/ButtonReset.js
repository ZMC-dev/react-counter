

const ButtonReset = props => {
  const reset = () => { props.setCounter(0) };

  return (
    <button
      onClick={reset}
    >
     Reset
    </button>

  );

};
export default ButtonReset;