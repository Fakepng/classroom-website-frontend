import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import { Button, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import moment from "moment";
import classnames from "classnames";
import axios from "axios";

const EditHomework = () => {
  const [homework, setHomework] = useState({});
  const [editHomework, setEditHomework] = useState([]);
  const [editingHomework, setEditingHomework] = useState({});
  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteModal, setDeleteModal] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [editModal, setEditModal] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setHomework((values) => ({ ...values, [name]: value }));
    const token = localStorage.getItem("accessToken");
    setHomework((values) => ({ ...values, accessToken: token }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_LINK}/homework/add`, homework)
      .then((response) => {
        alert(response.data.message);
      })
      .then(() => {
        handleQuery();
      });
  };

  const handleEditChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    // if (name === "DateGiven" || name === "DateDue") {
    // 	value = moment(value).subtract(7, "hours");
    // }
    setEditingHomework((values) => ({ ...values, [name]: value }));
  };

  const handleEditSubmit = (event) => {
    axios
      .post(`${process.env.REACT_APP_API_LINK}/homework/edit`, editingHomework)
      .then((response) => {
        alert(response.data.message);
      })
      .then(() => {
        handleQuery();
      });
  };

  const handleQuery = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}/homework/get-all`)
      .then((response) => {
        setEditHomework(
          response.data.sort((a, b) => {
            if (
              moment(a.DateDue).unix() >= moment().unix() &&
              moment(b.DateDue).unix() >= moment().unix()
            ) {
              return moment(a.DateDue).unix() - moment(b.DateDue).unix();
            }
            return moment(b.DateDue).unix() - moment(a.DateDue).unix();
          })
        );
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    handleQuery();
  }, []);

  const handleDeleteOpen = () => setShowDelete(true);
  const handleDeleteClose = () => setShowDelete(false);
  const handleEditOpen = () => setShowEdit(true);
  const handleEditClose = () => setShowEdit(false);

  const handleEditing = (_id, index) => {
    handleEditOpen();
    setEditModal({ _id, index });
    setEditingHomework((value) => editHomework[index]);
    const token = localStorage.getItem("accessToken");
    setEditingHomework((values) => ({
      ...values,
      _id,
      accessToken: token,
    }));
  };

  const handleDeleteModal = (_id, index) => {
    handleDeleteOpen();
    setDeleteModal({ _id, index });
  };

  const handleDelete = () => {
    const deleteHomework = {
      _id: deleteModal._id,
      accessToken: localStorage.getItem("accessToken"),
    };
    axios
      .post(
        `${process.env.REACT_APP_API_LINK}/homework/delete/`,
        deleteHomework
      )
      .then((response) => {
        handleQuery();
        alert(response.data.message);
      });
  };

  const homeworkMap = editHomework.map((hw, index) => {
    const homeworkColor = classnames({
      "table-danger": moment(hw.DateDue).unix() <= moment().unix(),
      "table-warning":
        moment(hw.DateDue).unix() > moment().unix() &&
        moment(hw.DateDue).unix() <= moment().add(1, "days").unix(),
      "table-success":
        moment(hw.DateDue).unix() > moment().add(1, "days").unix() &&
        moment(hw.DateDue).unix() <= moment().add(7, "days").unix(),
      "table-light": moment(hw.DateDue).unix() > moment().add(7, "days").unix(),
    });

    return (
      <tr key={hw._id} className={homeworkColor}>
        <td>{hw.Subject}</td>
        <td>{hw.Topic}</td>
        <td>{hw.Description}</td>
        <td>{moment(hw.DateGiven).format("DD/MM/YYYY, HH:mm")}</td>
        <td>{moment(hw.DateDue).format("DD/MM/YYYY, HH:mm")}</td>
        <td>
          <div className="d-grid gap-2">
            <Button
              variant="warning"
              size="sm"
              disable="false"
              onClick={() => handleEditing(hw._id, index)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDeleteModal(hw._id, index)}
            >
              Delete
            </Button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Helmet>
        <title>Edit Homework</title>
        <meta property="og:title" content="Edit Homework" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sp617.fakepng.com/login" />
        <meta
          property="og:image"
          content="https://sp617.fakepng.com/SP512.png"
        />
      </Helmet>
      {showDelete ? (
        <Modal show={showDelete} onHide={handleDeleteClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to Delete?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editHomework[deleteModal.index].Subject} |{" "}
            {editHomework[deleteModal.index].Topic}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                handleDeleteClose();
                handleDelete();
              }}
            >
              Delete
            </Button>
            <Button variant="secondary" autoFocus onClick={handleDeleteClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}

      {showEdit ? (
        <Modal show={showEdit} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editHomework[editModal.index].Subject} |{" "}
            {editHomework[editModal.index].Topic}
          </Modal.Body>
          <Form
            style={{ maxWidth: "80%", margin: "auto" }}
            onSubmit={handleEditSubmit}
          >
            <Row>
              <Col>
                <Form.Label>Subject</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="Subject"
                  onChange={handleEditChange}
                  defaultValue={editHomework[editModal.index].Subject}
                >
                  <option>Open this select menu</option>
                  <option value="ว33292">ว33292</option>
                  <option value="ว33101">ว33101</option>
                  <option value="ว33121">ว33121</option>
                  <option value="ว33245">ว33245</option>
                  <option value="ว30161">ว30161</option>
                  <option value="ค33102">ค33102</option>
                  <option value="ค33202">ค33202</option>
                  <option value="อ33102">อ33102</option>
                  <option value="อ33202">อ33202</option>
                  <option value="อ33204">อ33204</option>
                  <option value="อ33212">อ33212</option>
                  <option value="ท33102">ท33102</option>
                  <option value="ส33102">ส33102</option>
                  <option value="ศ33101">ศ33101</option>
                  <option value="ง33101">ง33101</option>
                  <option value="พ33102">พ33102</option>
                  <option value="ก30900">ก30900</option>
                  <option value="Homeroom">Homeroom</option>
                  <option value="กิจกรรมภายในโรงเรียน">
                    กิจกรรมภายในโรงเรียน
                  </option>
                  <option value="เตรียมความพร้อม ม.6">
                    เตรียมความพร้อม ม.6
                  </option>
                  <option value="Read Topic">Other</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formTopic">
                  <Form.Label>Topic</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Topic"
                    name="Topic"
                    onChange={handleEditChange}
                    defaultValue={editHomework[editModal.index].Topic}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formDateGiven">
                  <Form.Label>Date Given</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="DateGiven"
                    onChange={handleEditChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formDateDue">
                  <Form.Label>Date Due</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="DateDue"
                    onChange={handleEditChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="Description"
                onChange={handleEditChange}
                defaultValue={editHomework[editModal.index].Description}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => {
                handleEditClose();
                handleEditSubmit();
              }}
            >
              Submit
            </Button>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" autoFocus onClick={handleEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}

      <Form style={{ maxWidth: "80%", margin: "auto" }} onSubmit={handleSubmit}>
        <h1>Add Homework</h1>
        <Row>
          <Col>
            <Form.Label>Subject</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="subject"
              onChange={handleChange}
            >
              <option>Open this select menu</option>
              <option value="ว33292">ว33292</option>
              <option value="ว33101">ว33101</option>
              <option value="ว33121">ว33121</option>
              <option value="ว33245">ว33245</option>
              <option value="ว30161">ว30161</option>
              <option value="ค33102">ค33102</option>
              <option value="ค33202">ค33202</option>
              <option value="อ33102">อ33102</option>
              <option value="อ33202">อ33202</option>
              <option value="อ33204">อ33204</option>
              <option value="อ33212">อ33212</option>
              <option value="ท33102">ท33102</option>
              <option value="ส33102">ส33102</option>
              <option value="ศ33101">ศ33101</option>
              <option value="ง33101">ง33101</option>
              <option value="พ33102">พ33102</option>
              <option value="ก30900">ก30900</option>
              <option value="Homeroom">Homeroom</option>
              <option value="กิจกรรมภายในโรงเรียน">กิจกรรมภายในโรงเรียน</option>
              <option value="เตรียมความพร้อม ม.6">เตรียมความพร้อม ม.6</option>
              <option value="Read Topic">Other</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formTopic">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topic"
                name="topic"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formDateGiven">
              <Form.Label>Date Given</Form.Label>
              <Form.Control
                type="datetime-local"
                name="dateGiven"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formDateDue">
              <Form.Label>Date Due</Form.Label>
              <Form.Control
                type="datetime-local"
                name="dateDue"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <div style={{ maxWidth: "80%", margin: "auto" }}>
        <h1>Edit Homework</h1>
        <Table
          striped
          bordered
          hover
          responsive
          style={{ maxWidth: "80%", margin: "auto", marginTop: "2rem" }}
        >
          <thead>
            <tr>
              <th>Subject</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Date Given</th>
              <th>Date Due</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{homeworkMap}</tbody>
        </Table>
        <>
          {loading ? (
            <div
              style={{
                maxWidth: "min-content",
                margin: "auto",
                marginTop: "2rem",
              }}
            >
              <Spinner
                animation="border"
                role="status"
                style={{
                  padding: "2rem",
                }}
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
    </>
  );
};

export default EditHomework;
