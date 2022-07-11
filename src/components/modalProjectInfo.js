import { Modal, Button, Image, Carousel } from "react-bootstrap";
import './modalProjectInfo.css';
import {useState} from 'react';
import {projectsInfo} from '../projectsInfo'
import star from '../media/images/star.png';

export const ModalConstInfo = (props)=>{
  const images= [];
  for(let i=0; i<projectsInfo[props.index].stars; i++){
    images.push(<Image alt="star" src={star} className="customerReviewStar" />)
  }

  console.log('images: ', images);
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {projectsInfo[props.index].title}
            </Modal.Title>
          </Modal.Header>
          <CarousselComponent index={props.index}/>
          <Modal.Body>
            <h4>Overview:</h4>
            <p style={{whiteSpace: 'pre-wrap'}}>
              {projectsInfo[props.index].overview}
            </p>
            <h4>{projectsInfo[props.index].type === "personal" ? "Main Lessons:" : "Costumer review"}</h4>
            <div id="starsBox">
              {projectsInfo[props.index].type==='professional' && 
                  images.map(star=>star)
              }
            </div>
            <p style={{whiteSpace: 'pre-wrap'}}> 
            {projectsInfo[props.index].mainLessons}
            </p>
            <h4>Tech stack used:</h4>
            {projectsInfo[props.index].stackUsed.map(image=><Image key={Math.floor(Math.random()*1000000)} style={{width: '4vh'}} src={image}/>)}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export const CarousselComponent = (props) =>{
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={projectsInfo[props.index].images[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={projectsInfo[props.index].images[1]}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={projectsInfo[props.index].images[2]}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );

}


export const InfoToModal =(props)=>{
    const [modalShow, setModalShow] = useState(false);
    return(
        <div>
        <Image onClick={() => setModalShow(true)} className="stack-image" src="https://img.icons8.com/ios/344/info--v1.png"></Image>
        <ModalConstInfo
        index={props.index}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    )
}

