import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminNavbar = () => {
	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		window.location.reload(false);
		alert("Logout success");
	};

	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>SP 617</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/homework'>
							<Nav.Link>Homework</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/edit-homework'>
							<Nav.Link>Edit Homework</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/new-user'>
							<Nav.Link>New User</Nav.Link>
						</LinkContainer>
						<LinkContainer onClick={handleLogout} to='/'>
							<Nav.Link>Logout</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AdminNavbar;
