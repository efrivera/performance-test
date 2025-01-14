import React from 'react';
import Image from './Image';
import styles from './styles.scss';

const Hero = () => (
  <div id="carouselExampleControls" className={`carousel slide ${styles.container}`} data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image
          className="d-block w-100"
          alt="First slide"
          imageUrl="https://i5.wal.co/dfw/4ff9c6c9-cc0f/k2-_2add2578-1f56-46f5-b4cf-23918338b919.v1.jpg-b3adfa4bd51eea13f8a387c533d57254b7bcd7fc-optim-1360x410.jpg"
          sizes={[375, 760, 1280]}
        />
      </div>
      <div className="carousel-item">
        <Image
          className="d-block w-100"
          alt="Second slide"
          imageUrl="https://i5.walmartimages.com/dfw/4ff9c6c9-f5c9/k2-_181600aa-2d16-48bc-9c9a-47aa76a097de.v1.jpg"
          sizes={[760]}
        />
      </div>
      <div className="carousel-item">
        <Image
          className="d-block w-100"
          alt="Third slide"
          imageUrl="https://i5.wal.co/dfw/4ff9c6c9-3ea0/k2-_d792b602-3cee-46de-a202-44b28ca62301.v1.jpg-b71dbf14cb3ce14ed8d3d5d07966cf4f2da8f7f5-optim-1360x410.jpg"
          sizes={[760]}
        />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Hero;
