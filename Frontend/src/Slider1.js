import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider1() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men-1.jpg"  // Use the direct image URL from J. website
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner_129.jpg"  // Use the direct image URL from J. website
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner_130.jpg"  // Use the direct image URL from J. website
          alt="Third slide"
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

export default  Slider1