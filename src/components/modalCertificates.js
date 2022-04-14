import './modalCertificates.css';
import { Modal, Button, Form,Row, Col } from 'react-bootstrap';
import { CertificatesAccordion } from './certificatesAccordion';
import { useState } from 'react';

export const CertificatesComponent = (props) => {

    const [filter, setFilter] = useState('')
    const [year, setYear] = useState(null)
    
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                André Miranda - Certificates
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row style={{marginBottom: '20px'}}>
                    <Col className="yearFilter" xs="auto" md={2} lg={1}>
                        <Button 
                            variant="outline-success" 
                            onClick={()=> year ==="2021" ? setYear(null) : setYear("2021")} id="cert-filter-btn"
                            className={year === "2021" ? "filter-btn-active" : ""}
                            >
                            2021
                        </Button>
                    </Col>
                    <Col className="yearFilter" xs="auto" md={2} lg={1}>
                        <Button 
                            variant="outline-success" 
                            onClick={()=> year==="2022" ? setYear(null) : setYear("2022")}
                            className={year === "2022" ? "filter-btn-active" : ""}
                            >
                            2022
                        </Button>
                    </Col>
                    <Col xs={12} md={{offset: 1, span: 7}} lg={{offset: 2, span: 8}}>
                         <Form.Control type="text" placeholder="Filter Course" value={filter} onChange={(e)=>setFilter(e.target.value)} />
                    </Col>
                </Row>
                <CertificatesAccordion filter={filter} year={year}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="success">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}