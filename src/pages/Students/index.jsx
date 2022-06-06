import { useState } from "react";
import { Helmet } from "react-helmet";
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
				"radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)":
					social.platform === "IG",
				"#FF0000": social.platform === "YT",
				"#171515": social.platform === "GH",
			});

			const socialIcon = classnames({
				"/images/svg/FB.svg": social.platform === "FB",
				"/images/svg/IG.svg": social.platform === "IG",
				"/images/svg/YT.svg": social.platform === "YT",
				"/images/svg/GH.svg": social.platform === "GH",
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
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={socialIcon} alt={social.platform} width='30' height='30' />
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
			<Helmet>
				<title>Students</title>
				<meta property='og:title' content='Students' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com/students' />
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
