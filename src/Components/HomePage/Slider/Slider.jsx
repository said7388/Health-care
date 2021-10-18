import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  return (
    <div>
      <Carousel className="text-left">
        <Carousel.Item >
          <img
            className='d-block w-100'
            src='https://www.linkpicture.com/q/h1-slider-image-42.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 className='slider-title'>An Advanced Medicine Practice</h3>
            <p className='slider-text'>This is open to everyone every day and provides primary health care and cutting-edge medicine in a central location.</p>
            <button className="btn btn-regular">BOOK APPOINTMENT</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.linkpicture.com/q/h1-slider-image-32.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 className='slider-title'>We have the finest physicians</h3>
            <p className='slider-text'>Our integrated friendly health system is on a relentless pursuit of better care in the world</p>
            <button className="btn btn-regular">BOOK APPOINTMENT</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.linkpicture.com/q/h1-slider-image-22.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3 className='slider-title'>Dedication and Commitment</h3>
            <p className='slider-text'>
            We have made the most advanced, customer friendly medical services in the world.
            </p>
            <button className="btn btn-regular">BOOK APPOINTMENT</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
