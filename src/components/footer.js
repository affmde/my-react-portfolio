import { Col, Container } from "react-bootstrap"
import './footer.css'

export const Footer = () => {
    return(
        <div style={{height: '8vh', color: 'white'}}>
        <Container>
            <Col className="center" id="footer-text">André Miranda 2022</Col>
        </Container>
        </div>
    )   
}