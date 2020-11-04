import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Image } from 'react-bootstrap'

const LandingScreen = () => {
    return (
        <div className="landing-wrapper relative overflow-hidden">
            <Row className='h-100 '>
                <Col className='z-1 flex flex-column justify-center items-start ph6'>
                    <h1 className='f1 fw9 white'>¿Necesitas un lugar en donde administrar los clientes de tu negocio?</h1>
                    <p className='f4 fw4 white w-70 mb-5'>Con Order Up! es posible administrar los pedidos de tus clientes de una manera fácil y sencilla.</p>
                    <Link to='/register'>
                        <Button variant="outline-primary">Registrar a Order Up!</Button>{' '}
                    </Link>
                </Col>
                <Col></Col>
            </Row>
            <Image src='/images/blob.svg' className='absolute blob-container'></Image>
            <Image src='/images/blob2.svg' className='absolute blob-decor'></Image>
            <Image src='/images/user_interface.svg' className='absolute manypixels'></Image>
        </div>
    )
}

export default LandingScreen
