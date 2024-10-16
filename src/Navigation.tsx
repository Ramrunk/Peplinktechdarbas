import { Link, NavLink } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <li>
        <Link to="/" className="pagrindinis">
          Pagrindinis
        </Link>
      </li>
      <ul>
        <li>
          <NavLink to="/1">Sąrašas</NavLink>
        </li>
        <li>
          <NavLink to="/2">ChuckNorris</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
