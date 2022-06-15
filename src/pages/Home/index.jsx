import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";

import Schedule from "../../components/Schedule";
import Cleaning from "../../components/Cleaning";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [specialSchedule, setSpecialSchedule] = useState([]);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_LINK}/schedule/get`)
			.then((response) => {
				setSpecialSchedule(response.data);
				if (response.data.length > 0) handleShow();
			});
	}, []);

	return (
		<>
			<Helmet>
				<title>SP 617</title>
				<meta property='og:title' content='SP 617' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com' />
				<meta
					property='og:image'
					content='https://sp617.fakepng.com/SP512.png'
				/>
			</Helmet>
			{showModal ? (
				<Modal show={showModal} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{specialSchedule[0].Topic}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Table
							striped
							bordered
							hover
							responsive
							style={{ textAlign: "center", verticalAlign: "middle" }}
						>
							<thead>
								<tr>
									<th>Time</th>
									<th>Period</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{specialSchedule[0].Time1}</td>
									<td>{specialSchedule[0].Class1}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time2}</td>
									<td>{specialSchedule[0].Class2}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time3}</td>
									<td>{specialSchedule[0].Class3}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time4}</td>
									<td>{specialSchedule[0].Class4}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time5}</td>
									<td>{specialSchedule[0].Class5}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time6}</td>
									<td>{specialSchedule[0].Class6}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time7}</td>
									<td>{specialSchedule[0].Class7}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time8}</td>
									<td>{specialSchedule[0].Class8}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time9}</td>
									<td>{specialSchedule[0].Class9}</td>
								</tr>
								<tr>
									<td>{specialSchedule[0].Time10}</td>
									<td>{specialSchedule[0].Class10}</td>
								</tr>
							</tbody>
						</Table>
					</Modal.Body>
				</Modal>
			) : null}
			<Schedule />
			<Cleaning />
		</>
	);
};

export default Home;
