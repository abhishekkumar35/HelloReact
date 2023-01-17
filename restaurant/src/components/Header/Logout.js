const Logout = (props) => {
  const classes = props.classes;
  const bool = true;

  return (
    <button
      className={classes}
      onClick={() => {
        props.clicked(!bool);
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
