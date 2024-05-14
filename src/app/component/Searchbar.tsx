'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Dropdown from '../subcomponent/dropdown';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';
import { GrFavorite } from 'react-icons/gr';

const options = [
    { label: 'ทั้งหมด', link: '/' },
    { label: 'เคมีเกษตร', link: '/' },
    { label: 'ปุ๋ย', link: '/' },
    { label: 'สารปรับปรุงดิน', link: '/' },
    { label: 'อาหารเสริม', link: '/' },
    { label: 'อาหารสัตว์', link: '/' },
    { label: 'ระบบน้ำ', link: '/' },
    { label: 'เมล็ดพันธุ์', link: '/' },
    { label: 'วัสดุ อุปกรณ์', link: '/' },
];

const Searchbar = () => {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setHidden(true);
            }
            else {
                setHidden(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className='text-gray-500 bg-white w-full h-full'>
            <div className='flex justify-between items-center container mx-auto'>
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Logo.png" alt="Home" className="w-full h-12 object-cover" />
                    </a>
                </div>
                <div className='relative hidden lg:flex'>
                    <input
                        type='text'
                        className='block p-2 pl-10 my-2 rounded-md border-solid border-2 border-black-500'
                        placeholder='ค้นหาสินค้า'
                    />
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <HiOutlineSearch className='h-5 w-5 text-gray-500' />
                    </div>
                </div>
                <ul className='flex items-center '>
                    <li className='mx-3'>
                        <button>
                            <GrFavorite className='w-7 h-7' />
                        </button>
                    </li>
                    <>|</>
                    <li className='mx-3'>
                        <button>
                            <HiOutlineShoppingBag className='h-7 w-7' />
                        </button>
                    </li>
                    <li className='flex flex-col justify-center'>
                        <div>ตะกร้าสินค้า</div>
                        <div>1,257.00B</div>
                    </li>
                </ul>
            </div>
            <hr className='bg-gray hidden lg:flex' />
            <div className='container mx-auto pt-5 pb-5 hidden lg:flex'>
                <ul className='flex-row hidden items-center lg:flex text-center'>
                    <li className='mx-2'>
                        <a className='px-3 py-2 hover:bg-[#2f368e] hover:text-white rounded-lg duration-500' href='/'>
                            หน้าแรก
                        </a>
                    </li>
                    <li className='w-20 h-8  mx-2 rounded-lg'>
                        <Dropdown name={'สินค้า'} options={options} />
                    </li>
                    <li className='w-20 h-8  mx-2 rounded-lg '>
                        <Dropdown name={'บริการ'} options={options} />
                    </li>
                    <li className='mx-2'>
                        <a className='px-3 py-2 hover:bg-[#2f368e] hover:text-white rounded-lg duration-500' href='/'>
                            ข่าวสาร/โปรโมชั่น
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Searchbar;