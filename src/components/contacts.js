import { Col, Container, Form, Row, Button } from "react-bootstrap"
import './contacts.css'
import { useState } from "react";
import { send } from 'emailjs-com';

export const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault()
        send('service_axexct9', 'template_hk3nphx', {name, email, subject, message}, 'RW6zOp2aoWWD_c-qf').then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        document.getElementById('contact-form').reset()
    }

    return(
        <div className="page-container">
            <Container>
                <Row>
                    <Col>
                        <Col id="contactMe">Contact Me</Col>
                        <Row>
                            <Col id="contactDescription">If you liked my profile and my services can be of your use, feel free to contact me.
                            I'm looking to work with you, either as freelance or in a contract basis. </Col>
                        </Row>
                        <Row>
                            <Form onSubmit={handleSubmit} id="contact-form">
                                <Row>
                                    <Col>
                                    <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
                                </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter subject" onChange={(e)=>setSubject(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={10} placeholder="Write your message" onChange={(e)=>setMessage(e.target.value)}/>
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Send message
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                    <Col id="secondCol"></Col>
                </Row>
                
            </Container>
        </div>
    )
}