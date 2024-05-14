'use client'
import React, { useRef, useState, useEffect } from 'react';
interface Promodetail {
    id: number;
    image: string;
    link: string;
    title: string;
    status: boolean;
}

interface PromoProps {
    data: Promodetail[];
}

const codepromotion: React.FC<PromoProps> = ({ data }) => {
    const handleClick = (status: boolean) => {
        if(status){
            return;
        }
        //dosomething
    };
    const initialIndex = Math.floor(data.length / 2);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const newPosition = (containerRef.current.scrollWidth - containerRef.current.offsetWidth) / 2;
            containerRef.current.scrollTo(newPosition,0);
        }
    }, []);

    const scrollLeft = () => {
        if (currentIndex > 0 && currentIndex < data.length) {
            setCurrentIndex(currentIndex - 1);
            if (containerRef.current) {
                containerRef.current.scrollLeft -= containerRef.current.offsetWidth / 2;
            }
        }
    };

    const scrollRight = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
            if (containerRef.current) {
                containerRef.current.scrollLeft += containerRef.current.offsetWidth / 2;
            }
        }
    };
    return (
        <div className='relative w-full h-40'>
            <button className="absolute w-10 h-10 top-1/2 left-4 transform -translate-y-1/2 bg-[#224490] text-white rounded-full p-2 " onClick={scrollLeft}>
                &#10094;
            </button>
            <button className="absolute top-1/2 w-10 h-10 right-4 transform -translate-y-1/2 bg-[#224490] text-white rounded-full p-2 " onClick={scrollRight}>
                &#10095;
            </button>
            <div className='container mx-auto w-full h-full scroll-smooth'>
                <div className='flex overflow-x-hidden h-full' ref={containerRef}>
                    {data.map((item, index) => (
                        <div className='flex-none text-center mx-5 h-full relative '>
                            <div key={item.id} className='h-full'>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={index + item.title} className="w-full h-full object-cover" />
                                </a>
                                <div className='absolute inset-0 w-full h-full flex'>
                                    <div className='absolute bottom-2 left-2'>
                                        <button className='flex w-14 h-7 bg-white rounded-lg items-center justify-center hover:bg-[#1a1e4e] hover:text-white'
                                        onClick={() => handleClick(item.status)}
                                        >
                                            {item.status ? (
                                                <p className='text-center font-bold' style={{ fontSize: '10px' }}>ใช้เลย</p>
                                            ) : (
                                                <p className='text-center font-bold' style={{ fontSize: '10px' }}>เก็บโค้ด</p>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default codepromotion