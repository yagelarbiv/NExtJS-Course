/* eslint-disable @next/next/no-img-element */
"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../app/globals.css';
import Image from 'next/image';

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img alt='picture' src="http://picsum.photos/400/200"  />
        </div>
        <div>
          <img alt='picture' src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img alt='picture' src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img alt='picture' src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
};
