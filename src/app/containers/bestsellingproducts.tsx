import React from 'react'
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
    return (
        <div className="relative w-full h-auto pt-5 pb-5 border-solid border-2">
            <h1 className="text-4xl font-bold my-10 text-center">สินค้าขายดี</h1>
            <div className='container mx-auto'>

            </div>
        </div>
    )
}

export default bestsellingproducts