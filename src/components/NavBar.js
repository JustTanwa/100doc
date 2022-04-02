import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<Navbar bg='dark' variant='dark' expand='md'>
			<Navbar.Brand href='/' style={{ marginLeft: '1em' }}>
				100DOC
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse
				id='basic-navbar-nav'
				className='justify-content-end pe-3'
			>
				<Nav className='text-center'>
					<NavLink to='/today' className='nav-link'>
						Today
					</NavLink>
					<NavLink to='/archive' className='nav-link'>
						Archive
					</NavLink>
					<NavLink to='/blog' className='nav-link'>
						Blog
					</NavLink>
					<NavLink to='/contact' className='nav-link'>
						Contact
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
