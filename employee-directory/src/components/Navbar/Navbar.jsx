import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
 <nav className="navbar navbar-expand-lg">
    {/* <Link className="navbar-brand" to="/"> */}
      <a href="/">Employee Database</a>
    {/* </Link> */}
    <div>
        
    </div>
  </nav>
);

export default Navbar;
