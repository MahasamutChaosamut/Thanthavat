'use client'
import React, { useRef, useState, useEffect } from 'react';

interface CatalogItem {
    id: number;
    image: string;
    link: string;
    title: string;
}

interface CatalogProps {
    data: CatalogItem[];
}

const PromotionAndType: React.FC<CatalogProps> = ({ data }) => {
    const initialIndex = Math.floor(data.length / 2);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const newPosition = (containerRef.current.scrollWidth - containerRef.current.offsetWidth) / 2;
            containerRef.current.scrollTo(newPosition, 0);
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
        <div className='relative w-full h-auto pb-10'>
            <h1 className="flex text-4xl font-bold my-10 justify-center">หมวดหมู่สินค้า</h1>
            <div className='w-full h-auto'>
                <button className="absolute w-10 h-10 top-1/2 left-4 transform -translate-y-1/2 bg-[#224490] text-white rounded-full p-2 " onClick={scrollLeft}>
                    &#10094;
                </button>
                <button className="absolute top-1/2 w-10 h-10 right-4 transform -translate-y-1/2 bg-[#224490] text-white rounded-full p-2 " onClick={scrollRight}>
                    &#10095;
                </button>
                <div className='flex overflow-x-hidden scroll-smooth justify-center items-center' style={{}} ref={containerRef}>
                    {data.map((item, index) => (
                        <div className='flex-none text-center' key={item.id}>
                            <div className='mx-8 min-w-35 min-h-35 rounded-full'>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={item.title} className="w-full h-full rounded-full object-cover" />
                                </a>
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PromotionAndType;