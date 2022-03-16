import {useState, useRef} from 'react'
import {Image, Overlay} from 'react-bootstrap'

export const TooltipComponent = (props) =>{
  const info=props.info
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Image src={props.image} ref={target} onMouseEnter={() => setShow(true)} onMouseLeave={()=>setShow(false)} className="hobbies-img"/>
        
      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              marginTop: '10px',
              backgroundColor: 'white',
              padding: '8px 20px',
              width:'50vw',
              border: '2px solid black',
              color: 'black',
              fontStyle: 'italic',
              borderRadius: '15px',
              ...props.style,
            }}
          >
            {info}
          </div>
        )}
      </Overlay>
    </>
  );

}