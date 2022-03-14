import { Container, Row, Col, Image } from "react-bootstrap"
import './skills.css';
import skills from '../media/images/skills-image.png';
import esdrm from '../media/images/esdrm-logo.png';
import codecademy from '../media/images/codecademy-logo.png';
import skillsHorizontal from '../media/images/skill-horizontal.png';

export const Skills = () => {
    return(
        <div className="page-container">
            <Container>
                <Row style={{marginBottom: '40px'}}>
                    <Col>
                        <Row className="questions-row">
                            <Col className="question">What languages do I know?</Col>
                            <Col className="answer">Currently my strongest languages is Javascript. Planning in a near future learn as well Java and PHP.  </Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">What technologies do I use?</Col>
                            <Col className="answer">I my projects you will most probaby find the use of React.js. I like a lot to work with this library 
                            cause its simple, reliable and reusable. Depending on projects I can make also use of Redux.  </Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">Do I feel more confortable with Front-End or Back-End?</Col>
                            <Col className="answer">Clearly nowaday more confortable with Front-End. Although i have been developing some projects with Node.js and express servers form Back-End. </Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">What is my Experience?</Col>
                            <Col className="answer">I'm a self-taught developer who recently decided to change career from football to Web development.
                            This way I'm still a junior developer who is trying to get the oportunity to enter in the market. </Col>
                        </Row>
                    </Col>
                    <Col id="skills-logo-container">
                        <Image id="skills-image" src={skills}></Image>
                    </Col>
                    <Image id="skills-image-horizontal" src={skillsHorizontal}></Image>
                </Row>
                <Row style={{marginBottom: '50px'}}>
                    <Col id="education-logo-container">
                        <Image className="education-logo" src={esdrm}></Image>
                        <Image className="education-logo" src={codecademy}></Image>
                    </Col>

                    <Col>
                        <Row className="questions-row">
                            <Col id="education-title">Education</Col>
                            <Col className="degree">Bachelor - Sports Science with specialization in Football</Col>
                            <Col className="school">Sports Science School of Rio Maior, Portugal</Col>
                            <Col className="degree">Front End Career Path</Col>
                            <Col className="school">Codecademy</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}