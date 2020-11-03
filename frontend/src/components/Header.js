import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar id='nav' bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Order Up!</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Button variant="outline-primary">Registrar</Button>{' '}
{/*                             <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
                            </LinkContainer> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
