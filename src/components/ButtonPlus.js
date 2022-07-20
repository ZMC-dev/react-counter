//ButtonPlus.js


const ButtonPlus = props => {
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
     +
    </button>
  );
};

export default ButtonPlus;