import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="navigationMenu">
        <ul className="sidebar d-flex flex-column justify-content-center">
            <li><span><i className="fa fa-dashboard"></i></span><span>Dashboard</span></li>
            <li><span><i className="fa fa-users"></i></span><span>Students</span></li>
            <li><span><i className="fa fa-users"></i></span><span>Teachers</span></li>
            <li><span><i className="fa fa-building"></i></span><span>Department</span></li>
        </ul>
        </div>
    </>
  );
};

export default Navbar;
