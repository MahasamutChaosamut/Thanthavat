'use client'
import ProductCard from "../component/ProductCard";
import React, { useState, useEffect } from 'react';

interface bestsellingdetail {
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

interface bestsellingProps {
    data: bestsellingdetail[];
}

const bestsellingproducts: React.FC<bestsellingProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [isShowAll, setIsShowAll] = useState(false);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [currentItems, setCurrentItems] = useState(data.slice(indexOfFirstItem, indexOfLastItem));

    const handleSeeallOnclick = () => {
        setItemsPerPage(data.length);
    }

    const handleHideOnclick = () => {
        setItemsPerPage(8);
    }

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
        setIsShowAll(itemsPerPage >= data.length);
    }, [currentPage, itemsPerPage, data]);

    return (
        <div className="relative w-full h-auto pt-5 pb-5">
            <h1 className="text-4xl font-bold my-10 text-center">สินค้าขายดี</h1>
            <div className='container mx-auto'>
                <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10 xxl:grid-cols-5 xxl:gap-x-4 xxl:gap-y-12 2xxl:grid-cols-4 2xxl:gap-x-5 2xxl:gap-y-12">
                    {currentItems.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="pt-5">
                    {isShowAll ? (
                        <button className="w-full h-10 rounded-lg border-solid border-2 hover:bg-[#1a1e4e] hover:text-white duration-500" onClick={handleHideOnclick}>
                            ซ่อน
                        </button>
                    ) : (
                        <button className="w-full h-10 rounded-lg border-solid border-2 hover:bg-[#1a1e4e] hover:text-white duration-500" onClick={handleSeeallOnclick}>
                            ดูสินค้าทั้งหมด
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default bestsellingproducts;