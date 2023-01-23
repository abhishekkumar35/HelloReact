import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./ProfileClass";
const About = (props) => {
  return (
    <div className={props.className}>
      <h1>About</h1>
      <Link to="/about/profile">
        <p>Profile</p>
      </Link>
      <Profile name="Abhishek" />
      <Profile name="Ankit" />
      <Outlet />
    </div>
  );
};
export default About;
