import { Outlet } from "react-router-dom";

const About = (props) => {
  return (
    <div className={props.className}>
      <h1>About</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default About;
