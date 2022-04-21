import { Accordion, Image } from "react-bootstrap"
import {myCertificates} from '../myCertificates';

export const CertificatesAccordion = (props) => {

    const sort= myCertificates.sort((a,b)=>a.conclusion - b.conclusion)
    const filtered= sort.filter(filt=>filt.name.toLocaleLowerCase().includes(props.filter.toLowerCase()));
    const finalFilter = props.year ? filtered.filter(item => item.conclusion === props.year) : filtered

    return(
        <Accordion>
            {finalFilter.map(certificate => {
                return(
                <Accordion.Item eventKey={certificate.id} key={certificate.id}>
                    <Accordion.Header>
                        {certificate.name} - {certificate.conclusion} {certificate.relevant ? <span className="relevant">Relevant</span> : ""}
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image 
                            alt={`Certificate ${certificate.name}`}
                            src={certificate.url}
                            className="certificate-img" 
                            >
                        </Image>
                    </Accordion.Body>
                </Accordion.Item>
                )
            })} 
        </Accordion>
    )
}