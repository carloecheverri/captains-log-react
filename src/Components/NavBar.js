import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/logs">Logs</NavLink>
      <NavLink to="/logs/new">New Log</NavLink>
    </nav>
  );
};

export default NavBar;