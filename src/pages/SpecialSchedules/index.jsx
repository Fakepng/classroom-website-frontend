import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";

const SpecialSchedules = () => {
	const [specialSchedules, setSpecialSchedules] = useState([]);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setSpecialSchedules((values) => ({ ...values, [name]: value }));
		const token = localStorage.getItem("accessToken");
		setSpecialSchedules((values) => ({ ...values, accessToken: token }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(
				`${process.env.REACT_APP_API_LINK}/schedule/create`,
				specialSchedules
			)
			.then((response) => {
				alert(response.data.message);
			});
	};
	return (
		<>
			<Form style={{ maxWidth: "80%", margin: "auto" }} onSubmit={handleSubmit}>
				<h1>Special Schedules</h1>
				<Row>
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
					<Col>
						<Form.Group className='mb-3' controlId='formStartUse'>
							<Form.Label>Start</Form.Label>
							<Form.Control
								type='datetime-local'
								name='startUse'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formUseUntil'>
							<Form.Label>Use until</Form.Label>
							<Form.Control
								type='datetime-local'
								name='useUntil'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime1'>
							<Form.Label>Time</Form.Label>
							<Form.Control type='text' name='time1' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass1'>
							<Form.Label>Class</Form.Label>
							<Form.Control
								type='text'
								name='class1'
								placeholder='1'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime2'>
							<Form.Control type='text' name='time2' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass2'>
							<Form.Control
								type='text'
								name='class2'
								placeholder='2'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime3'>
							<Form.Control type='text' name='time3' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass3'>
							<Form.Control
								type='text'
								name='class3'
								placeholder='3'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime4'>
							<Form.Control type='text' name='time4' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass4'>
							<Form.Control
								type='text'
								name='class4'
								placeholder='4'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime5'>
							<Form.Control type='text' name='time5' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass5'>
							<Form.Control
								type='text'
								name='class5'
								placeholder='5'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime6'>
							<Form.Control type='text' name='time6' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass6'>
							<Form.Control
								type='text'
								name='class6'
								placeholder='6'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime7'>
							<Form.Control type='text' name='time7' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass7'>
							<Form.Control
								type='text'
								name='class7'
								placeholder='7'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime8'>
							<Form.Control type='text' name='time8' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass8'>
							<Form.Control
								type='text'
								name='class8'
								placeholder='8'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime9'>
							<Form.Control type='text' name='time9' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass9'>
							<Form.Control
								type='text'
								name='class9'
								placeholder='9'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className='mb-3' controlId='formTime10'>
							<Form.Control type='text' name='time10' onChange={handleChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3' controlId='formClass10'>
							<Form.Control
								type='text'
								name='class10'
								placeholder='10'
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default SpecialSchedules;
