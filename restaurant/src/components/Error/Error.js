import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Hey Something Wrong Happend !</h1>
      <div>
        {error.status} : {error.statusText}
      </div>
      <h2>{error.data}</h2>
    </div>
  );
};

export default Error;
