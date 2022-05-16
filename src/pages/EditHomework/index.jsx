import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";

const EditHomework = () => {
	const [homework, setHomework] = useState({});

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
			});
	};

	return (
		<>
			<Helmet>
				<title>Edit Homework</title>
				<meta property='og:title' content='Edit Homework' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com' />
				<meta property='og:image' content='%PUBLIC_URL%/sp517.png' />
			</Helmet>
			<Form style={{ maxWidth: "80%", margin: "auto" }} onSubmit={handleSubmit}>
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
		</>
	);
};

export default EditHomework;
