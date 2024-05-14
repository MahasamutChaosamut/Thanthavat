'use client'
import { TbBasketPlus, TbBasket } from "react-icons/tb"
import React, { useState,useEffect } from 'react';
interface monthlydetail {
    id: number;
    image: string;
    link: string;
    name: string;
    type: string;
    category_ids: number[]
    price: number;
    volumn: string,
    isinCart: boolean,
}

interface monthlyProps {
    data: monthlydetail[];
}
const MonthlyPromotion: React.FC<monthlyProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const middlePage = Math.ceil(totalPages / 2);
        setCurrentPage(middlePage);
    }, []);

    return (
        <div className="relative w-full h-auto pt-5 pb-5">
            <h1 className="text-4xl font-bold my-10 text-center">โปรโมชั่นพิเศษเฉพาะเดือนนี้</h1>
            <div className="container mx-auto w-full h-full">
                <div className="flex justify-center items-center">
                    {currentItems.map((item, index) => (
                        <div className={`flex mx-8 my-1 w-auto h-auto rounded-lg border-solid border-2 ${item.isinCart ? 'border-green-600' : 'border-gray-600'} shadow-md`} style={{ boxShadow: item.isinCart ? '0px -1px 1px rgba(0, 255, 0, 0.5), 0px 1px 1px rgba(0, 255, 0, 0.5)' : '0px -1px 1px rgba(178,184,183), 0px 1px 1px rgba(178,184,183)' }} key={item.id}>
                            <div className="w-full h-full flex-col" >
                                <div className="w-full h-full items-center justify-center flex">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} alt={item.name} className="w-30 h-30 rounded-lg object-cover" />
                                    </a>
                                </div>
                                <div className="text-start pt-5 pl-5 pr-5 pb-2 flex items-center justify-between border-solid border-2">
                                    <div className="flex-col border-solid border-2 w-full flex-nowrap">
                                        <p className="font-bold text-base whitespace-pre overflow-ellipsis">{item.name}{' '}{item.volumn}</p>
                                        <p className="text-green-600 pt-1">${item.price} / ชิ้น</p>
                                        <p className="text-gray-500 text-xs">{item.volumn}</p>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full ${item.isinCart ? 'bg-green-200' : 'bg-gray-200'}`}>
                                        <button className="w-full h-full flex items-center justify-center">
                                            {item.isinCart ? <TbBasketPlus className="w-6 h-6" /> : <TbBasket className="w-6 h-6" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    {Array.from(Array(Math.ceil(data.length / itemsPerPage)).keys()).map((pageIndex) => (
                        <button key={pageIndex} className={`w-3 h-3 mx-1 rounded-full ${pageIndex === currentPage - 1 ? 'bg-gray-800' : 'bg-gray-300'}`} onClick={() => paginate(pageIndex + 1)}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default MonthlyPromotion;