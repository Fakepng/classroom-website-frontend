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
	const [loading, setLoading] = useState(true);
	const [show, setShow] = useState(false);
	const [modal, setModal] = useState({});

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

	const handleQuery = () => {
		axios
			.get(`${process.env.REACT_APP_API_LINK}/homework/get`)
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

	const handleOpen = () => setShow(true);
	const handleClose = () => setShow(false);

	const handleDeleteModal = (_id, index) => {
		handleOpen();
		setModal({ _id, index });
	};

	const handleDelete = () => {
		const deleteHomework = {
			_id: modal._id,
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
			"alert-danger": moment(hw.DateDue).unix() <= moment().unix(),
			"alert-warning":
				moment(hw.DateDue).unix() > moment().unix() &&
				moment(hw.DateDue).unix() <= moment().add(1, "days").unix(),
			"alert-success":
				moment(hw.DateDue).unix() > moment().add(1, "days").unix() &&
				moment(hw.DateDue).unix() <= moment().add(7, "days").unix(),
			"alert-light": moment(hw.DateDue).unix() > moment().add(7, "days").unix(),
		});

		return (
			<tr key={hw._id} className={homeworkColor}>
				<td>{hw.Subject}</td>
				<td>{hw.Topic}</td>
				<td>{hw.Description}</td>
				<td>{moment(hw.DateGiven).format("DD/MM/YYYY, HH:mm")}</td>
				<td>{moment(hw.DateDue).format("DD/MM/YYYY, HH:mm")}</td>
				<td>
					<div className='d-grid gap-2'>
						<Button variant='warning' size='sm' disable='true'>
							Edit
						</Button>
						<Button
							variant='danger'
							size='sm'
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
				<meta property='og:title' content='Edit Homework' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com/login' />
				<meta
					property='og:image'
					content='https://sp617.fakepng.com/SP512.png'
				/>
			</Helmet>
			{show ? (
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Are you sure you want to Delete?</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{editHomework[modal.index].Subject} |{" "}
						{editHomework[modal.index].Topic}
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='danger'
							onClick={() => {
								handleClose();
								handleDelete();
							}}
						>
							Delete
						</Button>
						<Button variant='secondary' autoFocus onClick={handleClose}>
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
							aria-label='Default select example'
							name='subject'
							onChange={handleChange}
						>
							<option>Open this select menu</option>
							<option value='ว33191, ว33291'>ว33191, ว33291</option>
							<option value='ว33225'>ว33225</option>
							<option value='ว33244'>ว33244</option>
							<option value='ว33205'>ว33205</option>
							<option value='ค33101'>ค33101</option>
							<option value='ค33201'>ค33201</option>
							<option value='อ33211'>อ33211</option>
							<option value='อ33201'>อ33201</option>
							<option value='อ33203'>อ33203</option>
							<option value='ท33101'>ท33101</option>
							<option value='ท33201'>ท33201</option>
							<option value='ส33101'>ส33101</option>
							<option value='ศ33102'>ศ33102</option>
							<option value='ก30900'>ก30900</option>
							<option value='พ33101'>พ33101</option>
							<option value='Homeroom'>Homeroom</option>
							<option value='กิจกรรมภายในโรงเรียน'>กิจกรรมภายในโรงเรียน</option>
							<option value='Read Topic'>Other</option>
						</Form.Select>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formTopic'>
							<Form.Label>Topic</Form.Label>
							<Form.Control
								type='text'
								placeholder='Topic'
								name='topic'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formDateGiven'>
							<Form.Label>Date Given</Form.Label>
							<Form.Control
								type='datetime-local'
								name='dateGiven'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formDateDue'>
							<Form.Label>Date Due</Form.Label>
							<Form.Control
								type='datetime-local'
								name='dateDue'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>

				<Form.Group className='mb-3' controlId='formDescription'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						name='description'
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
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
								animation='border'
								role='status'
								style={{
									padding: "2rem",
								}}
							>
								<span className='visually-hidden'>Loading...</span>
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
