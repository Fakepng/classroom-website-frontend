import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
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
						<Nav.Link to='/login' as={NavLink}>
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
