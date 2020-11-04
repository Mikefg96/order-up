import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar id='nav' bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Link to='/'>
                        <Image src='./logo-white.png' className='logo'></Image>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to='/login'>
                                <Button variant="outline-primary">INICIAR SESIÓN</Button>{' '}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
