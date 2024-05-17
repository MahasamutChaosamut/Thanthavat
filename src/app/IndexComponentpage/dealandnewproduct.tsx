'use client'
import { TbBasketPlus, TbBasket } from "react-icons/tb"
import React, { useState, useEffect } from 'react';

interface detaildeal {
    id: number;
    image: string;
    link: string;
    name: string;
    type: string;
    category_ids: number[]
    price: number;
    volumn: string,
    discount: number,
    isinCart: boolean,
}
interface detailproduct {
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

interface dealandnewproductProps {
    deal: detaildeal[];
    newproduct: detailproduct[];
}

const dealandnewproducts: React.FC<dealandnewproductProps> = ({ deal, newproduct }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = deal.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    useEffect(() => {
        const totalItems = deal.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const middlePage = Math.ceil(totalPages / 2);
        setCurrentPage(middlePage);
    }, []);


    return (
        <div className="w-full h-auto pt-5 pb-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 md:gap-x-2 md:gap-y-8 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10 xxl:grid-cols-3 xxl:gap-x-4 xxl:gap-y-12 2xxl:grid-cols-3 2xxl:gap-x-5 2xxl:gap-y-12 gap-y-2 justify-center">
                    <div className="flex flex-col p-5">
                        <div className="flex flex-row pb-2">
                            //img
                            <p className="pl-2">ดีลราคาพิเศษ</p>
                        </div>
                        <div className="grid grid-row-3 gap-x-2 gap-y-2">
                            {currentItems.map((item, index) => (
                                <div className={`flex w-auto h-auto rounded-lg border-solid border-2 ${item.isinCart ? 'border-green-600' : 'border-gray-600'} shadow-md`} style={{ boxShadow: item.isinCart ? '0px -1px 1px rgba(0, 255, 0, 0.5), 0px 1px 1px rgba(0, 255, 0, 0.5)' : '0px -1px 1px rgba(178,184,183), 0px 1px 1px rgba(178,184,183)' }} key={item.id}>
                                    <div className="w-full h-full">
                                        <div className="items-center justify-between flex">
                                            <div className="relative  pl-3">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                                                </a>
                                                <div className="absolute border-solid border-2 w-10 h-5 top-5 left-2 flex items-center justify-center rounded-lg bg-red-500 ">
                                                    <p className="text-center text-sm">{item.discount}%</p>
                                                </div>
                                            </div>
                                            <div className="text-start w-full p-5 flex flex-col flex-nowrap">
                                                <p className="text-l font-bold">{item.name}{' '}{item.volumn}</p>
                                                <div className="flex flex-row font-bold">
                                                    <p className="line-through text-l text-red-500">{item.price}$</p>
                                                    <p className="text-l pl-1">{item.price - (item.price * (item.discount / 100))}/ชิ้น</p>
                                                </div>
                                                <p className="text-xs text-gray-500">{item.volumn}</p>
                                            </div>
                                            <div className="pr-3">
                                                <div className={`w-8 h-8 rounded-full ${item.isinCart ? 'bg-green-200' : 'bg-gray-200'}`}>
                                                    <button className="w-full h-full flex items-center justify-center">
                                                        {item.isinCart ? <TbBasketPlus className="w-6 h-6" /> : <TbBasket className="w-6 h-6" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-5 mb-5">
                            {Array.from(Array(Math.ceil(deal.length / itemsPerPage)).keys()).map((pageIndex) => (
                                <button key={pageIndex} className={`w-3 h-3 mx-1 rounded-full ${pageIndex === currentPage - 1 ? 'bg-gray-800' : 'bg-gray-300'}`} onClick={() => paginate(pageIndex + 1)}></button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col p-5">
                        <div className="flex flex-row pb-2">
                            //img
                            <p className="pl-2">สินค้าใหม่</p>
                        </div>
                        <div className="grid grid-row-3 gap-x-2 gap-y-2">
                            {newproduct.map((item, index) => (
                                <div className={`flex  w-auto h-auto rounded-lg border-solid border-2 ${item.isinCart ? 'border-green-600' : 'border-gray-600'} shadow-md`} style={{ boxShadow: item.isinCart ? '0px -1px 1px rgba(0, 255, 0, 0.5), 0px 1px 1px rgba(0, 255, 0, 0.5)' : '0px -1px 1px rgba(178,184,183), 0px 1px 1px rgba(178,184,183)' }} key={item.id}>
                                    <div className="w-full h-full">
                                        <div className="items-center justify-between flex pr-3">
                                            <div className="pl-3">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                                                </a>
                                            </div>
                                            <div className="text-start w-full p-5 flex flex-col flex-nowrap">
                                                <p className="text-l font-bold ">{item.name}{' '}{item.volumn}</p>
                                                <p className="text-l font-bold">{item.price}$</p>
                                                <p className="text-xs text-gray-500">{item.volumn}</p>
                                            </div>
                                            <div className="pr-3">
                                                <div className={`w-8 h-8 rounded-full ${item.isinCart ? 'bg-green-200' : 'bg-gray-200'}`}>
                                                    <button className="w-full h-full flex items-center justify-center">
                                                        {item.isinCart ? <TbBasketPlus className="w-6 h-6" /> : <TbBasket className="w-6 h-6" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full h-auto pt-2">
                                <button className="w-full rounded-lg h-auto border-solid border-2 hover:bg-[#1a1e4e] hover:text-white duration-500">
                                    ดูสินค้าทั้งหมด
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex pl-2 w-auto justify-center">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Bannar.png" alt="discountItem" className="w-full h-full rounded-lg object-cover" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default dealandnewproducts;