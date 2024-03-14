import React from "react";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation_content">
        <div className="navigation_content_links">
          <Link to="/contact">Contact</Link>
          <Link to="/">Admin Login</Link>
        </div>
        <div className="navigation_content_callUs">
          <BiSolidPhoneCall size={25} />
          <span>04.75.60.76.27</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
