import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Table from "react-bootstrap/Table";
import axios from "axios";
import moment from "moment";
import classnames from "classnames";
import Spinner from "react-bootstrap/Spinner";

const Homework = () => {
	const [homework, setHomework] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleQuery = () => {
		axios
			.get(`${process.env.REACT_APP_API_LINK}/homework/get`)
			.then((response) => {
				setHomework(
					response.data.sort((a, b) => {
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

	const homeworkMap = homework.map((hw) => {
		let homeworkColor = classnames({
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
			</tr>
		);
	});

	return (
		<>
			<Helmet>
				<title>Homework</title>
				<meta property='og:title' content='Homework' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com' />
				<meta property='og:image' content='%PUBLIC_URL%/sp517.png' />
			</Helmet>
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
		</>
	);
};

export default Homework;
