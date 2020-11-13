import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Cart from '../Cart/Cart';

class Header extends React.PureComponent {
    render() {
        return (
            <Navbar className="Header" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/images/gog_logo.png"
                            className="Header-logo d-inline-block align-top"
                            alt="GOG"
                        />
                    </Navbar.Brand>
                    <Cart></Cart>
                </Container>
            </Navbar>
        )
    }
}

export default Header;