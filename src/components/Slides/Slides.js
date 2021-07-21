import React from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';
import tachyons from "tachyons"
import images from "../Images/images.jpg"
import "./style.css"

export default function Slides() {
    return (
        <div className="ma2 br5">
             <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src={images} alt='...' style={{height:"200px"}} />
          <MDBCarouselCaption>
            <p style={{color:"#001B24"}}>Creator of this App :- </p>
            <h3 className="b" style={{color:"#001B44"}}>Harish Thavva</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src={images} alt='...'  style={{height:"200px"}}/>
          <MDBCarouselCaption>
            <h5 className="b change" style={{color:"#001B44"}}>Important Updates will be Informed here...</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src={images} alt='...'  style={{height:"200px"}}/>
          <MDBCarouselCaption>
            <h5 className="change" style={{color:"#001B44"}}>For more Information conatact abc@gmail.com </h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
        </div>
    )
}
