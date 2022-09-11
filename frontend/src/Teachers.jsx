import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Teachers = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState();

  const [data, setData] = useState([]);
  const api = "http://localhost:9292/teachers";

  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function handleSubmit(e) {
    fetch(`${api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        gender: gender,
        department_id: department,
      }),
    });
    alert("Teacher added successfully");
  }

  function handleDelete(e) {
    fetch("http://localhost:9292/teachers/1", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        gender: gender,
        department_id: department,
      }),
    });
    alert("Teacher deleted successfully");
  }

  return (
    <div className="container d-flex flex-column" style={{ marginTop: "50px" }}>
      <Button
        className="align-self-end mb-3"
        variant="primary"
        onClick={handleShow}
      >
        Add Teacher
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name : </Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSelect">
              <Form.Select
                aria-label="Default select example"
                value={department.name}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option>Select Department</option>
                <option value="1">Sciences</option>
                <option value="2">Engineering</option>
                <option value="3">Computing</option>
                <option value="4">Human Resources</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="formBasicSelect">
              <Form.Label>Gender :</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <table
        className="table table-striped bg-white"
        style={{ fontSize: "1.3rem" }}
      >
        <thead className="table-dark">
          <tr>
            <th>NO:</th>
git            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{teacher.name}</td>
              <td>{teacher.gender}</td>
              <td></td>
              <td>
                <button onClick={handleDelete} type="submit" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
