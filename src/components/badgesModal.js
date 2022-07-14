import { Modal, Button, Image } from "react-bootstrap";

export const BadgesModal = (props) => {
    
    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Image alt={`${props.info.title} logo`} className="badgeLogoTitle" src={props.info.logo}></Image> {props.info.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.info.subtitle}</h4>
        <div>
          {props.info.description}
        </div>
        <p><br/>Visit here: </p>
        <a className="urlLink" target="blanket" href={props.info.url}>{props.info.url}</a>
      </Modal.Body>
      <Modal.Footer>
        <p id="earned">Earned: {props.info.earned}</p>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
