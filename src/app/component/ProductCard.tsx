import React from 'react';
import { TbBasketPlus, TbBasket } from 'react-icons/tb';

interface ProductCardProps {
    item: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    return (
        <div className={`flex mx-4 my-1 w-auto h-auto rounded-lg border-solid border-2 ${item.isinCart ? 'border-green-600' : 'border-gray-600'} shadow-md`} style={{ boxShadow: item.isinCart ? '0px -1px 1px rgba(0, 255, 0, 0.5), 0px 1px 1px rgba(0, 255, 0, 0.5)' : '0px -1px 1px rgba(178,184,183), 0px 1px 1px rgba(178,184,183)' }} key={item.id}>
            <div className="w-full h-full flex-col">
                <div className="items-center justify-center flex">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img src={item.image} alt={item.name} className="w-30 h-30 rounded-lg object-cover" />
                    </a>
                </div>
                <div className="text-start pt-5 pl-3 pb-2 lg:pt-5 lg:pl-5 lg:pb-2 flex items-center justify-between">
                    <div className="flex-col w-2/3">
                        <p className="font-bold break-all">{item.name}{' '}{item.volumn}</p>
                        <p className="text-green-600 pt-1">${item.price} / ชิ้น</p>
                        <p className="text-gray-500 text-xs">{item.volumn}</p>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex justify-center'>
                            <div className={`w-8 h-8 rounded-full ${item.isinCart ? 'bg-green-200' : 'bg-gray-200'}`}>
                                <button className="w-full h-full flex items-center justify-center">
                                    {item.isinCart ? <TbBasketPlus className="w-6 h-6" /> : <TbBasket className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;