import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Student = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [classes, setClasses] = useState("");
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);
  const api = "http://localhost:9292/students";

  useEffect(() => {
    fetch(api)
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
        age: age,
        email: email,
        allsubjects: classes,
      }),
    });
    alert("Student added successfully");
  }

  function handleUpdate(e) {
    fetch(`http://localhost:9292/students/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: gender,
        age: age,
      }),
    });
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <Button
        className="align-self-end mb-3"
        variant="primary"
        onClick={handleShow}
      >
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
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
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age : </Form.Label>
              <Form.Control
                type="number"
                value={age}
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Email : </Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSelect">
              <Form.Select
                aria-label="Default select example"
                value={classes}
                onChange={(e) => setClasses(e.target.value)}
              >
                <option>Select Classroom</option>
                <option value="1">Programming</option>
                <option value="2">Communication Skills</option>
                <option value="3">Data Science</option>
                <option value="4">UI UX</option>
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

    <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name : </Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Email : </Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age : </Form.Label>
              <Form.Control
                type="number"
                value={age}
                placeholder="Enter Your Age"
                onChange={(e) => setAge(e.target.value)}
              />
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
          <Button variant="secondary" onClick={handleCloseUpdate}>
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
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Classes</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                {student.allsubjects.map((subject) => (
                  <ul key={subject.id}>
                    <li>{subject.subject.name}</li>
                  </ul>
                ))}
              </td>

              <th>{student.gender}</th>
              <td>
                {/* <UpdateButton onClick={handleShowUpdate} /> */}
                <button type="button" className="btn btn-primary" onClick={handleShowUpdate}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
