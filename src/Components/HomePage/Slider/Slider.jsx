import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  return (
    <div>
      <Carousel className="text-start">
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.linkpicture.com/q/h1-slider-image-42.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 className='text-secondary'>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.linkpicture.com/q/h1-slider-image-32.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.linkpicture.com/q/h1-slider-image-22.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
