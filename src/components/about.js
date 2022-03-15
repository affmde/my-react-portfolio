import { Container, Row, Col, Image } from "react-bootstrap"
import './about.css'
import myPhoto from '../media/images/andre-miranda.jpg'


export const About = () => {
    return (
        <div className="page-container animate__animated animate__zoomIn">
            <Container>
                <Row style={{minHeight: '70vh', display: 'flex', alignItems:'center', textAlign: 'center'}} >
                    <Col>
                        <Image id="myPhoto" src={myPhoto}></Image>
                    </Col>
                    <Col xs={12} md={8} id="about-text-container" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
                        <Col style={{fontSize:"5vh", fontWeight: 'bold'}}>About Me</Col>
                        <Col>Hello, I'm André Miranda and I am a happy portuguese young developer living in Finland.</Col>
                        <Col>Multi passionated person, who likes a lot to read, play guitar, do all kind of sports and as well be in front of the computer screen </Col>
                        <Col>Actually sports played a very important role in my life, since i am a former professional football coach who recently decided to change his career path to the IT World.
                        Football has been always a huge passion for me, have played it since I was 3 years old and for more than 25 years, and been a 
                        professional football coach for more than a decade.
                        Although, recently I found a different passion in my life, and decided to persue it. I left my football career life and decided to start studying
                        Web-development. Now I am really enjoying this new world and do not regret any little bit to have changed my career! </Col>
                    </Col>
                </Row>
                <Row style={{border: '2px solid white', display: 'flex', flexWrap: 'wrap', margin: '0px 50px', padding: '30px'}}>
                    <Col>
                        <Row id="row-personal-info">
                            <Col><strong>Full Name:</strong> André Filipe Ferreira Miranda</Col>
                            <Col><strong>Nationality:</strong> Portuguese</Col>
                            <Col><strong>Birthday:</strong> 02-02-1991</Col>
                            <Col><strong>Location:</strong> Helisnki, Finland</Col>
                        </Row>
                    </Col>
                    <Col>
                    <Row>
                        <Col>
                            <Row style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <Col><strong>Hobbies</strong></Col>
                                <Row style={{width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-guitar-stay-home-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"></Image></Col>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/office/344/book.png"></Image></Col>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-airplane-airport-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"></Image></Col>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/emoji/344/soccer-ball-emoji.png"></Image></Col>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/fluency/344/laptop.png"></Image></Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs={12} md={8}>
                            <Row style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <Col><strong>Languages</strong></Col>
                                <Row style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/color/344/portugal.png"></Image> - Native</Col>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/color/344/great-britain.png"></Image> - Fluent</Col>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/color/344/spain-2.png"></Image> - Intermediate</Col>
                                    <Col><Image className="hobbies-pic" src="https://img.icons8.com/external-flat-icons-inmotus-design/344/external-europe-europe-flags-flat-icons-inmotus-design-13.png"></Image> - Intermediate</Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}