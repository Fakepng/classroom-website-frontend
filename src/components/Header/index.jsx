import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
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
						<LinkContainer to='/login'>
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
