import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="student-class container d-flex align-items-center justify-content-around">
      <div className="card" style={{ width: "250px" }}>
        <img
          className="img-fluid"
          src="https://img.freepik.com/free-vector/grades-concept-illustration_114360-5958.jpg?w=740&t=st=1662462911~exp=1662463511~hmac=1cc71a143fd893b22f85e67f366ae2f0da5479ee3a4ef10e766e6f821d62297d"
          alt="student vector"
          style={{ width: "250px" }}
        />
        <div className="card-body" style={{ backgroundColor: "#fff" }}>
          <h4 card-title>Students</h4>
          <Link className="btn btn-primary" to="/students">
            View
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "250px" }}>
        <img
          className="img-fluid"
          src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg?w=740&t=st=1662463305~exp=1662463905~hmac=9d93bbe50f89e1351a1c3dca06f467bf77a3187e7b0ec06e812121041a44f39f"
          alt="student vector"
          style={{ width: "250px" }}
        />
        <div className="card-body" style={{ backgroundColor: "#fff" }}>
          <h4 card-title>Teachers</h4>
          <Link className="btn btn-primary" to="/teachers">
            View
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "300px" }}>
        <img
          className="img-fluid"
          src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2561.jpg?w=740&t=st=1662463434~exp=1662464034~hmac=2cb175136b6939ecccabc6f35aec0cfdb4271b4dd9de3e09a2dff4eb49a8444d"
          alt="student vector"
          style={{ width: "300px" }}
        />
        <div className="card-body" style={{ backgroundColor: "#fff" }}>
          <h4 card-title>Department</h4>
          <Link className="btn btn-primary" to="/department">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
