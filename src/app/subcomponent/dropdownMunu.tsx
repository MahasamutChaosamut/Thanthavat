'use client'
import { useRef, useContext } from "react";
import ActiveLink from "../component/active-link";
import { IoClose } from "react-icons/io5";
import { useZustand } from '../Context/constContext';

interface Option {
    label: string;
    link: string;
}

interface DropdownProps {
    options: Option[];
    name: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ name, options }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const setActive = useZustand((state) => state.setActive)

    const hidemenu = () => {
        setActive(false);
    }

    return (
        <div className="z-[100] fixed left-0 top-0" ref={dropdownRef}>
            <div className="z-[100] bg-[#ffffff] absolute flex flex-col p-5 w-[400px] h-screen" style={{ textAlign: 'right' }}>
                <div className="my-5 flex w-full justify-between">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="../images/Logo.png" alt="logo" className="w-fill h-12 " />
                    </a>
                    <button className="right-0" onClick={hidemenu}>
                        <IoClose className="w-12 h-12" style={{ color: '#2f368e' }}/>
                    </button>
                </div>
                <div></div>
                {options && options.map((item, i) => (
                    <div key={i} className="flex hover:bg-[#424991] my-1 h-12 whitespace-nowrap w-full text-left relative">
                            <ActiveLink
                                href={item.link}
                                activeClassName="font-semibold active"
                                key={i}
                                className="absolute text-[#344054] mx-2 my-3 hover:text-[#ffffff] duration-500 ease-in-out w-full"
                                onClick={hidemenu}
                            >
                                {item.label}
                            </ActiveLink>
                    </div>
                ))}
                <div className="">
                    //account
                </div>
            </div>
            <div className="z-[80] fixed w-screen h-screen " onClick={hidemenu}>
            </div>
        </div>
    );
};

export default DropdownMenu;