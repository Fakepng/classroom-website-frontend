import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import moment from "moment";
import classnames from "classnames";

const Homework = () => {
	const [homework, setHomework] = useState([]);

	const handleQuery = () => {
		axios
			.get(`${process.env.REACT_APP_API_LINK}/homework/get`)
			.then((response) => {
				setHomework(
					response.data.sort((a, b) => {
						return moment(b.DateDue).unix() - moment(a.DateDue).unix();
					})
				);
			});
	};

	useEffect(() => {
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
			<Table
				striped
				bordered
				hover
				style={{ maxWidth: "60%", margin: "auto", marginTop: "2rem" }}
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
		</>
	);
};

export default Homework;
