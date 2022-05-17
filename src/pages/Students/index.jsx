import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import classnames from "classnames";
import StudentsJSON from "../../config/Students.json";

const Students = () => {
	const students = StudentsJSON.map((student) => {
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
					style={{ background: socialColor, borderRadius: "20px" }}
					href={social.url}
					key={social.platform}
				>
					{social.platform}
				</Button>
			);
		});

		return (
			<Card style={{ width: "18rem", margin: "auto", height: "28rem" }}>
				<Card.Img variant='top' src={student.img} key={student.no} />
				<Card.Body>
					<Card.Title>{student.nickname}</Card.Title>
					{student.role ? (
						<Card.Subtitle className='mb-2 text-muted'>
							{student.role}
						</Card.Subtitle>
					) : null}
					<Card.Text>{student.name}</Card.Text>
				</Card.Body>
				<ButtonGroup aria-label='Basic example'>{socials}</ButtonGroup>
			</Card>
		);
	});

	return (
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
	);
};

export default Students;
