import { useState } from "react";
import { Helmet } from "react-helmet";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import TeachersJSON from "../../config/Teachers.json";
import "../Students/Students.css";

const Students = () => {
	const [teacherModal, setTeacherModal] = useState({ open: false, index: -1 });
	const handleTeacherClose = () => setTeacherModal({ open: false, index: -1 });
	const handleTeacherOpen = (index) => setTeacherModal({ open: true, index });

	const teacher = TeachersJSON.map((teacher, index) => {
		return (
			<Card
				style={{
					width: "18rem",
					margin: "auto",
					height: "28rem",
				}}
				key={teacher.nickname}
				className='cards'
			>
				<Card.Img
					variant='top'
					src={teacher.img}
					key={teacher.nickname}
					onClick={() => handleTeacherOpen(index)}
				/>
				<Card.Body>
					<Card.Title>{teacher.nickname}</Card.Title>
					<Card.Text>{teacher.name}</Card.Text>
				</Card.Body>
			</Card>
		);
	});

	return (
		<>
			<Helmet>
				<title>Teachers</title>
				<meta property='og:title' content='Teachers' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com/teachers' />
				<meta
					property='og:image'
					content='https://sp617.fakepng.com/SP512.png'
				/>
			</Helmet>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
					gap: "2rem",
					margin: "2rem auto",
					width: "80%",
					maxWidth: "1100px",
				}}
			>
				{teacher}
			</div>
			{teacherModal.open ? (
				<Modal show={teacherModal.open} onHide={handleTeacherClose}>
					<Modal.Header closeButton>
						<Modal.Title>
							{TeachersJSON[teacherModal.index].nickname}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img
							src={TeachersJSON[teacherModal.index].img}
							alt={TeachersJSON[teacherModal.index].name}
							style={{ width: "100%" }}
						/>
					</Modal.Body>
					<Modal.Footer>
						<div className='left-div'>
							Name:
							<span className='right-span'>
								{TeachersJSON[teacherModal.index].name}
							</span>
						</div>
						<div className='left-div'>
							Nickname:
							<span className='right-span'>
								{TeachersJSON[teacherModal.index].nickname}
							</span>
						</div>
					</Modal.Footer>
				</Modal>
			) : null}
		</>
	);
};

export default Students;
