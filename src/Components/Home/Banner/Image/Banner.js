import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
import Bannerimg1 from './clay-banks-N3SsG7xR-Dg-unsplash.jpg';
import Bannerimg2 from './jacopo-maia--gOUx23DNks-unsplash.jpg';
import Bannerimg3 from './tamanna-rumee-mIqyYpSNq3o-unsplash.jpg';
import Bannerimg4 from './mk-s-tHHFiw6GNEU-unsplash.jpg';
import Bannerimg5 from './ashkan-forouzani-sUlR4Iul-9c-unsplash.jpg';
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container' style={{width:'100%'}}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 image   "
          src={Bannerimg1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image  "
          src={Bannerimg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image  "
          src={Bannerimg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image  "
          src={Bannerimg4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image  "
          src={Bannerimg5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;