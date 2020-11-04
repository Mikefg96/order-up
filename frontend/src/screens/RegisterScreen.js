import React from 'react'
import { Button, Card, Image, Form } from 'react-bootstrap'

const RegisterScreen = () => {
    return (
        <div className='register-wrapper relative overflow-hidden flex justify-center items-center'>
            <Card className='card-form z-1' data-aos='fade-up'>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label className='fw4'>Nombre(s)</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar nombre(s)" />
                        </Form.Group>
                        <Form.Group controlId="lastname">
                            <Form.Label className='fw4'>Apellido(s)</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar apellido(s)" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label className='fw4'>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresar correo" />
                            <Form.Text className="text-muted">
                                Nunca compartiremos tu correo con alguien más.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className='fw4'>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresar contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            REGISTRAR
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <Image src='/images/blobs/3.svg' className='absolute blob3'></Image>
            <Image src='/images/blobs/4.svg' className='absolute blob4'></Image>
        </div>
    )
}

export default RegisterScreen
