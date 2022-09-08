import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteButton from "./DeleteButton";
import Form from "react-bootstrap/Form";

const Teachers = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);
  const api = "http://localhost:9292/teachers";

  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div
      className="container d-flex flex-column"
      style={{ marginTop: "150px" }}
    >
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name : </Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Departments</option>
              <option value="1">Accounting</option>
              <option value="2">Engineering</option>
              <option value="3">Human Resources</option>
            </Form.Select>
            
            <Form.Group className="mb-3 mt-3">
            <Form.Label>Gender :</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <table className="table table-striped bg-white" style={{ fontSize: "1.3rem" }}>
        <thead className="table-dark">
          <tr>
            <th>NO:</th>
            <th>Name</th>
            <th>Classroom</th>
            <th>Gender</th>
            <th>Department</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td></td>
              <td>{teacher.gender}</td>
              <td>{teacher.department.name}</td>
              <td>
                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
