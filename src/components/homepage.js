import { Col, Container, Image, Row, Button } from "react-bootstrap"
import './homepage.css'
import developerEmoji from '../media/images/homepage-pic.png'
import {useNavigate} from 'react-router-dom'


export const Homepage = () => {
    const nav= useNavigate()
    return(
        <div class="page-container">
            <Container>
                <Row style={{height: '84vh', display: 'flex', alignItems:'center', textAlign: 'center'}}>
                    <Col className="center">
                        <Row className="center description">
                            <Col><span role="img" aria-label="hello">👋</span>   Hi there!</Col>
                            <Col id="title">André Miranda</Col>
                            <Col id='web-dev'>Web Developer - Full-Stack</Col>
                            <Col id="webdev-description">I am a junior developer who is trying to enter the Market and 
                                getting experience in this amazing Tech World! 
                                <span role="img" aria-label="grinning-face">😀</span></Col>
                            <Col id="hire-btn-container">
                                <Button id="hireMe-button" onClick={()=>nav('/contacts')}>Contact me</Button>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image src={developerEmoji} id="developerEmoji"></Image>
                        <Col id="homepage-quote">“Great web design without functionality is like a sports car with no engine.”<br/>Paul Cookson </Col>
                    </Col>
                    <Col id="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}