import { Link } from "react-scroll";
import { navRoutes } from "../../data";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { cssPerfectShape } from "../../util";

const Sidebar = ({ open, onClose }) => {
  return (
    <div className={`sidebar ${open ? "active" : ""}`}>
      <div className="top">
        <div
          className="close-btn"
          onClick={onClose}
          style={{ ...cssPerfectShape(40, 40) }}
        >
          <FaTimes />
        </div>
      </div>

      <div className="middle">
        {navRoutes.map((route, index) => (
          <Link
            key={index}
            to={route.id}
            className="route"
            smooth={true}
            spy={true}
            offset={-50}
            onClick={onClose}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
