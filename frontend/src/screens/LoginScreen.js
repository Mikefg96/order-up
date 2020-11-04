import React from 'react'
import { Row, Col, Card, Image, Form, Button } from 'react-bootstrap' 

const LoginScreen = () => {
    return (
        <div className='login-wrapper relative overflow-hidden'>
            <Row className='h-100'>
                <Col></Col>
                <Col className='flex justify-center items-center'>
                    <Card className='card-form z-1' data-aos='fade-down'>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="email">
                                    <Form.Label className='fw4'>Correo electrónico</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresar correo" />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label className='fw4'>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingresar contraseña" />
                                    <Form.Text className="text-muted">
                                        No compartas tu contraseña con nadie.
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    INICIAR SESIÓN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Image src='/images/finger_print.svg' className='absolute z-1 manypixels' data-aos="fade-right"></Image>
            <Image src='/images/blobs/5.svg' className='absolute blob5'></Image>
            <Image src='/images/blobs/6.svg' className='absolute blob6'></Image>
        </div>
    )
}

export default LoginScreen
