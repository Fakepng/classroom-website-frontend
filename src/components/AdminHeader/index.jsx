import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Client from "../../config/version";

const AdminNavbar = () => {
	const [Server, setServer] = useState("");

	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		window.location.reload(false);
		alert("Logout success");
	};

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_LINK}/version`).then((response) => {
			setServer(response.data.version);
		});
	}, []);

	return (
		<Navbar bg='light' expand='lg' sticky='top'>
			<Container>
				<Navbar.Brand to='/' as={NavLink}>
					<img
						src='/SP512.png'
						width='30'
						height='30'
						className='d-inline-block align-top'
						alt='SP logo'
					/>
					617
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link to='/' as={NavLink}>
							Home
						</Nav.Link>
						<Nav.Link to='/homework' as={NavLink}>
							Homework
						</Nav.Link>
						<Nav.Link to='/students' as={NavLink}>
							Students
						</Nav.Link>
						<Nav.Link to='/teachers' as={NavLink}>
							Teachers
						</Nav.Link>
						<Nav.Link to='/edit-homework' as={NavLink}>
							Edit Homework
						</Nav.Link>
						<Nav.Link to='/special-schedules' as={NavLink}>
							Special Schedules
						</Nav.Link>
						<Nav.Link to='/new-user' as={NavLink}>
							New User
						</Nav.Link>
						<Nav.Link to='/' as={NavLink} onClick={handleLogout}>
							Logout
						</Nav.Link>
					</Nav>
					Client: {Client} Server: {Server}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AdminNavbar;
