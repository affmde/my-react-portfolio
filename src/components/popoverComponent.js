import {useState, useRef} from 'react';
import {CloseButton, Image, Overlay, Popover} from 'react-bootstrap';

export const PopoverComponent = (props) =>{
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const handleOut = (event) => {
      setShow(false);
  };
    

    return(
      <div ref={ref}>
      <Image className='education-logo' src={props.image} onMouseEnter={handleClick}></Image>

      <Overlay
        show={show}
        target={target}
        placement="right-end"
        container={ref}
        containerPadding={20}
        delay={0}
      >
        <Popover id="popover-contained" onMouseLeave={handleOut}>
          <Popover.Header as="h3" style={{color: 'black'}}>{props.title} <CloseButton aria-label="Hide" style={{float: 'right'}} onClick={()=>setShow(false)} /> </Popover.Header>
          <Popover.Body>
            <Image src={props.url} style={{width: '100%'}}></Image>
            <Popover.Body>
                <strong>Website: </strong><a style={{textDecoration: 'none'}} href={props.website} target="_blank">{props.website}</a>
            </Popover.Body>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
    )
}