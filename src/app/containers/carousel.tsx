'use client'
import React, { useState, useEffect } from 'react';


interface CarouselItem {
  id: number;
  image: string;
  link: string;
  title: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='relative w-full'>
      <div className='flex'>
        {data.map((item, index) => (
          <div key={item.id} className={`w-full ${index === currentIndex ? 'block z-30' : 'hidden z-20'}`}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.title} className="w-full object-cover" style={{ maxHeight: '80vh' }} />
            </a>
          </div>
        ))}
        <div className='z-40'>
          <button className="absolute w-10 h-10 top-1/2 left-4 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 " onClick={prevSlide}>
            &#10094;
          </button>
          <button className="absolute w-10 h-10 top-1/2 right-4 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 " onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="z-40 absolute bottom-1 left-1/2 transform -translate-x-1/2">
          {data.map((_, index) => (
            <button key={index} className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`} onClick={() => goToSlide(index)}></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;