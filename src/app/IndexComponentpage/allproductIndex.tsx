'use client'
import { useState } from "react";
import ProductCard from "../component/ProductCard";

interface productdetail {
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

interface productProps {
    data: productdetail[];
}

const allproductIndex: React.FC<productProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const handleSeeallOnclick = () => {
        
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div className="flex w-auto h-auto pt-5">
            <div className="container mx-auto">
                <div>
                    <a href="/">
                        <img src="/images/HBPage.png" alt="discountItem" className="w-full h-full rounded-lg object-cover" />
                    </a>
                </div>
                <div className="pt-5">
                    <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10 xxl:grid-cols-4 xxl:gap-x-4 xxl:gap-y-12 2xxl:grid-cols-4 2xxl:gap-x-5 2xxl:gap-y-12">
                        {currentItems.map((item, index) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div className="w-full h-10 my-5">
                    <button className="w-full h-full rounded-lg order-solid border-2 hover:bg-[#1a1e4e] hover:text-white duration-500" onClick={()=>handleSeeallOnclick()}>
                        ดูสินค้าทั้งหมด
                    </button>
                </div>
            </div>
        </div>
    )
}

export default allproductIndex