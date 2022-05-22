import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import classnames from "classnames";
import StudentsJSON from "../../config/Students.json";
import "./Students.css";

const Students = () => {
	const [modal, setModal] = useState({ open: false, index: -1 });

	const handleClose = () => setModal({ open: false, index: -1 });
	const handleOpen = (index) => setModal({ open: true, index });

	const students = StudentsJSON.map((student, index) => {
		const socials = student.social.map((social) => {
			const socialColor = classnames({
				"#4267B2": social.platform === "FB",
				"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)":
					social.platform === "IG",
				"#FF0000": social.platform === "YT",
			});

			return (
				<Button
					variant='outline-light'
					style={{
						background: socialColor,
						borderRadius: "20px",
						maxWidth: "4rem",
					}}
					href={social.url}
					key={social.platform}
				>
					{social.platform}
				</Button>
			);
		});

		return (
			<Card
				style={{ width: "18rem", margin: "auto", height: "28rem" }}
				key={student.id}
				className='cards'
			>
				<Card.Img
					variant='top'
					src={student.img}
					key={student.no}
					onClick={() => handleOpen(index)}
				/>
				<Card.Body>
					<Card.Title className='left-div'>
						{student.nickname}
						<span className='right-span'>{student.no}</span>
					</Card.Title>
					{student.role ? (
						<Card.Subtitle className='mb-2 text-muted'>
							{student.role}
						</Card.Subtitle>
					) : null}
					<Card.Text>{student.name}</Card.Text>
				</Card.Body>
				<ButtonGroup
					aria-label='Basic example'
					style={{ justifyContent: "space-evenly" }}
				>
					{socials}
				</ButtonGroup>
			</Card>
		);
	});

	return (
		<>
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
				{students}
			</div>
			{modal.open ? (
				<Modal show={modal.open} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{StudentsJSON[modal.index].nickname}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img
							src={StudentsJSON[modal.index].img}
							alt={StudentsJSON[modal.index].name}
							style={{ width: "100%" }}
						/>
						{/* {StudentsJSON[modal.index].id} */}
					</Modal.Body>
					<Modal.Footer>
						<div className='left-div'>
							Name:
							<span className='right-span'>
								{StudentsJSON[modal.index].name}
							</span>
						</div>
						<div className='left-div'>
							Nickname:
							<span className='right-span'>
								{StudentsJSON[modal.index].nickname}
							</span>
						</div>
						<div className='left-div'>
							Student No:
							<span className='right-span'>{StudentsJSON[modal.index].no}</span>
						</div>
						<div className='left-div'>
							Student Id:
							<span className='right-span'>{StudentsJSON[modal.index].id}</span>
						</div>
						<div className='left-div'>
							Role:
							<span className='right-span'>
								{StudentsJSON[modal.index].role}
							</span>
						</div>
						<div className='left-div'>
							Cleaning:
							<span className='right-span'>
								{StudentsJSON[modal.index].cleaning}
							</span>
						</div>
					</Modal.Footer>
				</Modal>
			) : null}
		</>
	);
};

export default Students;
