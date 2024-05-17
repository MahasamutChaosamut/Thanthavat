'use client'
import ProductCard from "../component/ProductCard";
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
                <div className="grid grid-cols-2 gap-x-1 gap-y-6 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10 xxl:grid-cols-4 xxl:gap-x-4 xxl:gap-y-12 2xxl:grid-cols-4 2xxl:gap-x-5 2xxl:gap-y-12">
                    {currentItems.map((item, index) => (
                        <ProductCard key={item.id} item={item} />
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