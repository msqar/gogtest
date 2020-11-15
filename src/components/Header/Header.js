import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Cart from '../Cart/Cart';

/**
 * Header Component:
 * This is the site's header.
 * It includes the Cart component functionality.
*/
class Header extends React.PureComponent {
    render() {
        return (
            <Navbar className="Header" sticky="top">
                <Container fluid="md">
                    <Navbar.Brand className="Header-logoBrand" href="/">
                        <img
                            src="/images/gog_logo.png"
                            className="Header-logo d-inline-block align-top"
                            alt="GOG"/>
                    </Navbar.Brand>
                    <Cart />
                </Container>
            </Navbar>
        )
    }
}

export default Header;