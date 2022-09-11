import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navigationMenu navbar">
      <h3 className="text-center text-white">Elimu Management System</h3>
        <ul className="navbar-nav sidebar d-flex flex-column justify-content-center">
          <li className="nav-item">
            <span>
              <i className="fa fa-dashboard"></i>
            </span>
            <Link className="nav-link sideLinks" to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <span>
              <i className="fa fa-users"></i>
            </span>
            <Link className="nav-link sideLinks" to="/students">Students</Link>
          </li>
          <li>
            <span>
              <i className="fa fa-users"></i>
            </span>
            <Link className="nav-link sideLinks" to="/teachers">Teachers</Link>
          </li>
          <li>
            <span>
              <i className="fa fa-building"></i>
            </span>
            <Link className="nav-link sideLinks" to="/departments">Department</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
