import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../media/images/am-no-background.png'
import './navbar.css'


export const TopNav = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" id="NavBar">
            <Container>
                <Navbar.Brand><Image src={logo} id="logo"></Image></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer> 
                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer> 
                        <LinkContainer to="/skills"><Nav.Link>Skills</Nav.Link></LinkContainer>
                        <LinkContainer to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
                        <LinkContainer to="/contacts"><Nav.Link>Contacts</Nav.Link></LinkContainer> 
                        <NavDropdown title="Social Networks" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.facebook.com/andre.miranda.77312" target="_blank">Facebook<Image className="socialMedia-logo" src="https://img.icons8.com/ios/344/facebook-circled--v1.png"></Image></NavDropdown.Item>
                            <NavDropdown.Item href="https://www.instagram.com/andremiranda4/" target="_blank">Instagram<Image className="socialMedia-logo" src="https://img.icons8.com/ios/344/instagram-new--v1.png"></Image></NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/andre-miranda-3a768556/" target="_blank">Linkedin<Image className="socialMedia-logo" src="https://img.icons8.com/ios/344/linkedin.png"></Image></NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/affmde" target="_blank">GitHub<Image className="socialMedia-logo" src="https://img.icons8.com/ios/344/github--v1.png"></Image></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}