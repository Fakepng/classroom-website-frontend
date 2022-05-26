import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminNavbar = () => {
	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		window.location.reload(false);
		alert("Logout success");
	};

	return (
		<Navbar bg='light' expand='lg' sticky='top'>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>
						<img
							src='/SP512.png'
							width='30'
							height='30'
							className='d-inline-block align-top'
							alt='SP logo'
						/>
						617
					</Navbar.Brand>
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
						<LinkContainer to='/students'>
							<Nav.Link>Students</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/teachers'>
							<Nav.Link>Teachers</Nav.Link>
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
