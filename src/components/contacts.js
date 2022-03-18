import { Col, Container, Form, Row, Button, Image } from "react-bootstrap"
import './contacts.css'
import { useState } from "react";
import { send } from 'emailjs-com';
import {Helmet} from "react-helmet";

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
            <Helmet>
                <title>Contacts</title>
                <meta 
                    name="description"
                    content="Contact me through the form, or then visit one of my pages and hit me there"
                />
            </Helmet>
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
                    <Col id="secondCol">
                        <Row>
                            <Col id="findMe">Find me:</Col>
                        </Row>
                        <Row className="findMe-row">
                            <Col><Image className="contacts-images" src="https://img.icons8.com/fluency/344/facebook-new.png"></Image></Col>
                            <Col xs={10}><a className="link" href="https://www.facebook.com/andre.miranda.77312" target="_blank">https://www.facebook.com/andre.miranda.77312</a></Col>
                        </Row>
                        <Row className="findMe-row">
                            <Col><Image className="contacts-images" src="https://img.icons8.com/color/344/instagram-new--v1.png"></Image></Col>
                            <Col xs={10}><a className="link" href="https://www.instagram.com/andremiranda4/" target="_blank">https://www.instagram.com/andremiranda4/</a></Col>
                        </Row>
                        <Row className="findMe-row">
                            <Col><Image className="contacts-images" src="https://img.icons8.com/external-justicon-flat-justicon/344/external-linkedin-social-media-justicon-flat-justicon.png"></Image></Col>
                            <Col xs={10}><a className="link" href="https://www.linkedin.com/in/andre-miranda-3a768556/" target="_blank">https://www.linkedin.com/in/andre-miranda-3a768556/</a></Col>
                        </Row>
                        <Row className="findMe-row">
                            <Col><Image className="contacts-images" src="https://img.icons8.com/stickers/344/github.png"></Image></Col>
                            <Col xs={10}><a className="link" href="https://github.com/affmde" target="_blank">https://github.com/affmde</a></Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}