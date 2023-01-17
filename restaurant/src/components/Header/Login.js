const Login = (props) => {
  const classes = props.classes;

  const bool = false;
  return (
    <button
      className={classes}
      onClick={() => {
        props.clicked(!bool);
      }}
    >
      Login
    </button>
  );
};

export default Login;
