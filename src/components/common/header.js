

import { Navbar, Container,Nav } from 'react-bootstrap';
import LogOut from '../logout'

import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <Container>
                <Navbar expand="sm" variant="light" bg="light">
                    <Navbar.Collapse>
                        <Nav className= "justify-content-md-center">
                                <LogOut/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default Header;