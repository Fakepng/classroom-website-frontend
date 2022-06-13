import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import moment from "moment";
import classnames from "classnames";
import Spinner from "react-bootstrap/Spinner";

const Homework = () => {
	const [homework, setHomework] = useState([]);
	const [loading, setLoading] = useState(true);
	const [useSubjectCode, setUseSubjectCode] = useState(false);

	const sortHomework = (homework) => {
		return homework.sort((a, b) => {
			if (
				moment(a.DateDue).unix() >= moment().unix() &&
				moment(b.DateDue).unix() >= moment().unix()
			) {
				return moment(a.DateDue).unix() - moment(b.DateDue).unix();
			}
			return moment(b.DateDue).unix() - moment(a.DateDue).unix();
		});
	};

	const handleQuery = () => {
		axios
			.get(`${process.env.REACT_APP_API_LINK}/homework/get`)
			.then((response) => {
				setHomework(sortHomework(response.data));
			})
			.then(() => {
				setLoading(false);
			});
	};

	const handleQueryMore = () => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_API_LINK}/homework/get-all`)
			.then((response) => {
				setHomework(sortHomework(response.data));
			})
			.then(() => {
				setLoading(false);
			});
	};

	const handleSubjectCode = (event) => {
		setUseSubjectCode(event.target.checked);
	};

	useEffect(() => {
		setLoading(true);
		handleQuery();
	}, []);

	const homeworkMap = homework.map((hw) => {
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

		let homeworkSubject = "";

		switch (hw.Subject) {
			case "ว33191, ว33291":
				homeworkSubject = "คอมพิวเตอร์";
				break;
			case "ว33225":
				homeworkSubject = "เคมี";
				break;
			case "ว33244":
				homeworkSubject = "ชีววิทยา";
				break;
			case "ว33205":
				homeworkSubject = "ฟิสิกส์";
				break;
			case "ค33101":
				homeworkSubject = "คณิตศาสตร์";
				break;
			case "ค33201":
				homeworkSubject = "คณิตศาสตร์เพื่มเติม";
				break;
			case "อ33211":
				homeworkSubject = "Grammar";
				break;
			case "อ33101":
				homeworkSubject = "English";
				break;
			case "อ33201":
				homeworkSubject = "Reading and Writing";
				break;
			case "อ33203":
				homeworkSubject = "Listening and Speaking";
				break;
			case "ท33101":
				homeworkSubject = "วรรณคดีและวรรณกรรม";
				break;
			case "ท33201":
				homeworkSubject = "ภาษาไทย";
				break;
			case "ส33101":
				homeworkSubject = "ประวัติศาสตร์";
				break;
			case "ศ33102":
				homeworkSubject = "ดนตรีสากล";
				break;
			case "ก30900":
				homeworkSubject = "แนะแนว";
				break;
			case "พ33101":
				homeworkSubject = "พละศึกษาและสังคมศึกษา";
				break;
			default:
				homeworkSubject = hw.Subject;
		}

		return (
			<tr key={hw._id} className={homeworkColor}>
				<td>{useSubjectCode ? hw.Subject : homeworkSubject}</td>
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
				<meta property='og:url' content='https://sp617.fakepng.com/homework' />
				<meta
					property='og:image'
					content='https://sp617.fakepng.com/SP512.png'
				/>
			</Helmet>
			<Form.Check
				type='switch'
				id='useSubjectCode'
				label='Use Subject code'
				onChange={handleSubjectCode}
				style={{ maxWidth: "80%", margin: "auto", marginTop: "2rem" }}
			/>
			<Table
				striped
				bordered
				hover
				responsive
				style={{ maxWidth: "80%", margin: "auto" }}
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
					<>
						<Button
							style={{ margin: "auto", marginTop: "1rem", display: "block" }}
							variant='secondary'
							size='sm'
							disable='false'
							onClick={handleQueryMore}
						>
							Load More
						</Button>
					</>
				)}
			</>
		</>
	);
};

export default Homework;
