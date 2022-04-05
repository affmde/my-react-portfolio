import { Container, Row, Col, Image } from "react-bootstrap"
import './about.css'
import myPhoto from '../media/images/andre-miranda.jpg'
import { TooltipComponent } from "./tooltip"
import {Helmet} from "react-helmet"
import homepagePic from '../media/images/homepagePic.png'

export const About = () => {
    return (
        <div className="page-container animate__animated animate__zoomIn">
            <Helmet>
                <title>About Me</title>
                <meta 
                    name="description"
                    property="description"
                    content="Discover more about me and my story of life"
                />
                <meta property="og:title" content="About Me" />
                <meta property="og:url" content="https://affmde.github.io/my-react-portfolio/#/about" />
                <meta property="og:image" content={homepagePic} />
            </Helmet>
            <Container>
            <Row style={{minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems:'center', textAlign: 'center'}} >
                    <Col>
                        <Image id="myPhoto" src={myPhoto} alt="Andre Miranda"></Image>
                    </Col>
                    <Col xs={12} md={8} id="about-text-container" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
                        <Col style={{fontSize:"5vh", fontWeight: 'bold'}}>My story...</Col>
                        <Col>Hello, I'm André Miranda and I am a happy portuguese young developer living in Finland since 2014.</Col>
                        <Col>And why does a young portuguese guy move to Finland, you maybe be wondering? Well... actually that was all because of Football. Whaaatt?!
                        Yes.. football brought me from Portugal to Finland. The desire to meet new cultures and help to develop the football here, made me accept to
                        leave the warm Portugal and move to cold Finland. And I couldn't be more happy about my decision. It has been wonderful years since 2014 until now.</Col>
                        <Col>But what is a football coach doing here in the web development world, you're asking now?</Col>
                        <Col>Well... after more than a decade as a professional coach (in Portugal and Finland), I found out that my passion was moving towards 
                        another field. Trainings and games were being less and less interesting comparing with lines of code. So after lot of self-reflection, I decided to stop my sports career, and embrace
                        the world of Tech.</Col>
                        <Col>Since 2021 I decided to study full-time to became a web-developer. As a self-taught developer the road is defenitly not easy, but why not 
                        to take it, challenge it and see where I can go? I have been learning through online courses, reading books and articles and also by developing self-projects.</Col>
                        <Col>The motivation and eagerness to learn and get better is never missing and I wish to be able to enter in the Tech market in a near future.</Col>
                        <Col>And this is my nice story, from a young portuguese football coach turning into a web-developer in Finland. </Col> 
                    </Col>
                </Row>
                <Row id="personal-info-row" >
                    <Col md={6} style={{display: 'flex', flexDirection:'column', justifyContent: 'space-evenly'}}>
                        <Col className="info-title">Personal Info:</Col>
                        <Row>
                            <Col className="info-subtitle">Full Name:</Col>
                            <Col className="info-subtinfo">André Filipe Ferreira Miranda</Col>
                        </Row>
                        <Row>
                            <Col className="info-subtitle">Birthday: </Col>
                            <Col className="info-subtinfo">02-02-1991</Col>
                        </Row>
                        <Row>
                            <Col className="info-subtitle">Nationality: </Col>
                            <Col className="info-subtinfo">Portugal</Col>
                        </Row>
                        <Row>
                            <Col className="info-subtitle">Location: </Col>
                            <Col className="info-subtinfo">Helsinki</Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Col className="info-title">Languages</Col>
                        <Row>
                            <Col><Image className="languages-img" src="https://img.icons8.com/color/344/portugal.png" alt="portugal"></Image></Col>
                            <Col className="languages-txt">Native</Col>
                        </Row>
                        <Row>
                            <Col><Image className="languages-img" src="https://img.icons8.com/color/344/great-britain.png" alt="english"></Image></Col>
                            <Col className="languages-txt">Fluent</Col>
                        </Row>
                        <Row>
                            <Col><Image className="languages-img" src="https://img.icons8.com/color/344/spain.png" alt="spanish"></Image></Col>
                            <Col className="languages-txt">Intermediate</Col>
                        </Row>
                        <Row>
                            <Col><Image className="languages-img" src="https://img.icons8.com/color/344/finland.png" alt="finnish"></Image></Col>
                            <Col className="languages-txt">Intermediate</Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="hobbies-row">
                    <Col className="info-title">My hobbies</Col>
                    <Row style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <TooltipComponent 
                            image="https://img.icons8.com/external-justicon-flat-justicon/344/external-football-sport-justicon-flat-justicon.png"
                            info="Did you read my story? So no suprise to see football here. Unfortunatly not playing anymore myself, but
                            you can be sure that football is on the TV most of the time."/>
                            <TooltipComponent 
                            image="https://img.icons8.com/emoji/344/guitar-emoji.png"
                            info="No, I'm not any Jimi Hendrix, but playing guitar is really one of my passions. Do you want some rock? 🤘"/>
                        <TooltipComponent 
                            image="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-airplane-vacation-planning-guys-trip-flaticons-lineal-color-flat-icons.png"
                            info="Who doesn't like to travel? I must confess I haven't been in many places, but that's definitly something I love to do.
                            Favourite trip until now? Stockholm, Sweden."/>
                        <TooltipComponent 
                            image="https://img.icons8.com/color/344/book.png"
                            info="Reading is one of my favorites hobbies since I was a kid. From technical books to some nice thrillers
                            , it will be very probable that, while you are reading this, I am reading a book."/>
                        <TooltipComponent 
                            image="https://img.icons8.com/color/344/running--v1.png"
                            info="In the recent times I discovered a new pleasure in Running. If, when I played football, 
                            I liked mostly to run with a ball on the feet, nowadays I like to run outside and enjoy the nice views
                            of Helsinki. "/>
                        <TooltipComponent 
                            image="https://img.icons8.com/external-itim2101-lineal-color-itim2101/344/external-coding-computer-technology-itim2101-lineal-color-itim2101.png"
                            info="Coding is my job but, as well, it is such a nice hobby 
                            that you can find me, on my free time, at some cafe writing lines of code.  "/>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}