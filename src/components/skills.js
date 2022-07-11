import { Container, Row, Col, Image } from "react-bootstrap"
import './skills.css';
import skills from '../media/images/skills-image.png';
import esdrm from '../media/images/esdrm-logo.png';
import codecademy from '../media/images/codecademy-logo.png';
import helsinkiUniversity from '../media/images/helsinki-university.png'
import skillsHorizontal from '../media/images/skill-horizontal.png';
import backendLogos from '../media/images/backend-logos.png';
import backendHorizontal from '../media/images/backend-logos-horizontal.png';
import unity from '../media/images/unity.png';
import { PopoverComponent } from "./popoverComponent";
import {Helmet} from "react-helmet";
import homepagePic from '../media/images/homepagePic.png';
import { useState } from "react";
import { CertificatesComponent } from "./modalCertificates";
import unityJuniorProgrammerBadge from "../media/images/myCertificates/unity-junior-programmer.png";
import unityEssentialsBadge from '../media/images/myCertificates/Unity_Essentials-Pathway_Badge.png';
import { BadgesModal } from "./badgesModal";
import {digitalBadgeInfo} from '../myDigitalBadges';
import { useNavigate } from "react-router-dom";

export const Skills = () => {
    const [modalShow, setModalShow] = useState(false);
    const [showBadgesModal, setShowBadgesModal] = useState(false);
    const [modalBadgeInfo, setModalBadgeInfo] = useState({});

    const navigate = useNavigate();
    const handleShow = (index) =>{
        setShowBadgesModal(true);
        setModalBadgeInfo({
            title: digitalBadgeInfo[index].title,
            logo: digitalBadgeInfo[index].logo,
            subtitle: digitalBadgeInfo[index].subtitle,
            description: digitalBadgeInfo[index].description,
            url: digitalBadgeInfo[index].url,
            earned: digitalBadgeInfo[index].earned
        })
    }

    console.log(digitalBadgeInfo)
    return(
        <div className="page-container">
            <Helmet>
                <title>Andre Miranda | Skills</title>
                <meta 
                    name="description"
                    property="description"
                    content="Find all my technical habilities as well as my education"
                />
                <meta property="og:title" content="Skills" />
                <meta property="og:url" content="https://affmde.github.io/my-react-portfolio/#/skills" />
                <meta property="og:image" content={homepagePic} />
            </Helmet>
            <Container>
                <Row style={{marginBottom: '40px'}}>
                    <Col xs={12} md={8}>
                        <Row className="questions-row">
                            <Col className="question">What languages do I know?</Col>
                            <Col className="answer">Currently my strongest languages is Javascript. Planning in a near future learn as well C and C++.</Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">Web development vs game development?</Col>
                            <Col className="answer">I started my learning on coding by learning javascript, and subsquently React.js, as a language to develop websites. This way most of my learning process was based on Web development. Althought I have always been fascinating about gaming, and as I started to understanding and mastering more Javascript, I started shifting to game development through Phaser 3. In this moment, both areas are of my interest and I plan to keep learning and working on both. Maybe in a more distant future I learn C or C++ as I want and then go deeper in the gaming development world.</Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">What technologies do I use?</Col>
                            <Col className="answer">In my projects you will most probaby find the use of React.js. I like a lot to work with this library 
                            cause its simple, reliable and reusable. Depending on projects I can make also use of Redux.<br/> In gaming projects, I have been using Phaser 3, a great javascript library to create amazing html games.  </Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">Do I feel more confortable with Front-End or Back-End?</Col>
                            <Col className="answer">I would say that I can consider my self as better in the Front-End side because I have done more front-end based projects. Althought, for my lastest projects I decided to start focusing more on the using of Node, express and socket.io in order to develop my back-end side. In this projects I used CRUD and REST to manage and display data. </Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">What is my Experience?</Col>
                            <Col className="answer">I'm a self-taught developer who in the end of 2021 decided to change career from football to Web development.
                            This way I'm still a junior developer who is trying to get the oportunity to enter in the market. I recently (June 2022) made my first professional project to a Hairdressing salon in Helsinki, Finland, that you can visit <span onClick={()=>navigate("/projects")} id="spanSkillsToProjects">here</span>.</Col>
                        </Row>
                        <Row className="questions-row">
                            <Col className="question">How have you been teaching yourself and what are your plans for the future?</Col>
                            <Col className="answer">When I figured out I wanted to change my career I started taking online courses about Javascript. Codecademy and Helsinki open university provided the bases of my studies. Also as a reading lover, I aquired some books about web development that helped me with very good information. Now, I'm in the way to enter in Helsinki Hive school, which is a great coding school. Hopefully I get in.</Col>
                        </Row>
                    </Col>
                    <Col id="skills-logo-container" xs={12} md={4}>
                        <Image id="skills-image" src={skills} alt="skills image"></Image>
                        <Image id="unity-logo" src={unity} alt="Unity logo"/>
                        <Image id="backend-logos" src={backendLogos} alt="back end image"></Image>
                    </Col>
                    <Image className="skills-image-horizontal" src={skillsHorizontal} alt="skills horizontal image"></Image>
                    <Image className="skills-image-horizontal" src={backendHorizontal} alt="backend horizontal image"></Image>
                </Row>
                <Row>
                    <Row className="skills-titles">
                        <Col style={{textAlign: 'center', marginBottom: '30px'}}>Digital badges</Col>
                    </Row>
                    <Row className="badges-row">
                        <Col xs={{offset: 3, span:3}} lg={{offset: 5, span:1}} onClick={() => handleShow(0)}><Image alt="Unity Junior Programmer" src={unityJuniorProgrammerBadge} className="digitalBadges"></Image></Col>
                        <Col xs={{offset: 0, span:3}} lg={{offset: 0, span:1}} onClick={() => handleShow(1)}><Image alt="Unity Junior Programmer" src={unityEssentialsBadge} className="digitalBadges"></Image></Col>
                    </Row>
                </Row>
                <Row style={{marginBottom: '50px'}}>
                    <Col id="education-logo-container">
                        <Row>
                            <Col lg={6}>
                                <PopoverComponent image={esdrm}
                                        title={'ESDRM'}
                                        website="https://siesdrm.ipsantarem.pt/esdrm/si_main"
                                        url="https://siesdrm.ipsantarem.pt/esdrm/web_gessi_docs.download_file?p_name=F1276349851/Campus%20ESDRM.jpg" 
                                />
                            </Col>
                            <Col lg={6}>
                                <PopoverComponent image={codecademy}
                                    title={'Codecademy'}
                                    website="https://www.codecademy.com/"
                                    url="https://research-assets.cbinsights.com/2022/01/03014853/Codecademy-Image.png" 
                                />
                            </Col>
                            <Col lg={6}>
                                <PopoverComponent image={helsinkiUniversity}
                                    title={'Helsinki University'}
                                    website="https://fullstackopen.com/en/"
                                    url="https://www.helsinki.fi/assets/drupal/s3fs-public/styles/hero_image/public/migrated-group-news/150058-fullstack_en_1184x507.jpg?h=316e730a&itok=gg-qwvAH" 
                                />
                            </Col>
                            <Col lg={6}>
                                <PopoverComponent image={unity}
                                    title={'Unity'}
                                    website="https://learn.unity.com/?variant=b"
                                    url="https://diak46rl5chc7.cloudfront.net/orgs/131534/contents/c52cguo24tkdwk9i/c52cguo24tkdwk9i.jpg" 
                                />
                            </Col>
                        </Row>          
                    </Col>

                    <Col>
                        <Row className="questions-row">
                            <Col className="skills-titles">Education</Col>
                            <Col className="degree">Bachelor - Sports Science with specialization in Football</Col>
                            <Col className="school">Sports Science School of Rio Maior, Portugal</Col>
                            <Col className="degree">Front End Engineer Career Path</Col>
                            <Col className="school">Codecademy</Col>
                            <Col className="degree">Full Stack open 2022</Col>
                            <Col className="school">Helsinki University</Col>
                            <Col className="degree">Unity Junior Programmer</Col>
                            <Col className="school">Learn Unity</Col>
                            <Col onClick={() => setModalShow(true)} xs={{span: 6, offset: 6}} className="check-certificates">Check all my certificates</Col>
                        </Row>
                    </Col>
                </Row>
                <CertificatesComponent 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <BadgesModal 
                    show={showBadgesModal}
                    onHide={() => setShowBadgesModal(false)}
                    info= {modalBadgeInfo}/>
            </Container>

        </div>
    )
}