'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { FiAlignLeft } from "react-icons/fi";
import DropdownMenu from '../subcomponent/dropdownMunu';
import { CiLocationOn } from "react-icons/ci";
import { useZustand } from '../Context/constContext';
const options = [
    { label: 'หน้าแรก', link: '/' },
    { label: 'สินค้า', link: '/' },
    { label: 'บริการ', link: '/' },
    { label: 'ข่าวสาร/โปรโมชั่น', link: '/' },
];

function Navbar() {
    const [hidden, setHidden] = useState(false);
    const Isactive = useZustand((state) => state.active)
    const setActive = useZustand((state) => state.setActive)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setHidden(true);
            }
            else {
                setActive(false);
                setHidden(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    function handleOnclick() {
        setActive(true);
    }

    return (
            <div className='relative bg-[#1a1e4e] text-white p-5'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center'>
                        {hidden && (
                            <button onClick={handleOnclick} className='flex flex-col items-center justify-center w-50 flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px'>
                                <FiAlignLeft className='flex w-full w-7 h-7' />
                            </button>
                        )}
                        <div className='hidden lg:flex'>
                            <CiLocationOn className='mx-2 w-7 h-7' />
                            <p>Store location:Lincoln-344,Illinois,Chicago,USA</p>
                        </div>
                        <ul className='flex'>
                            <li className='mx-1 hover:text-blue-300'>
                                <Link href={"/login"}>เข้าสู่ระบบ</Link>
                            </li>
                            <div className='mx-1'>/</div>
                            <li className='mx-1 hover:text-blue-300'>
                                <Link href={"/register"}>สมัครสมาชิก</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {Isactive && (
                    <DropdownMenu name='' options={options} />
                )}
            </div>
    )
}

export default Navbar;