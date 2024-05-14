'use client'
import { useState, useEffect, useRef } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

interface Option {
    label: string;
    link: string;
}

interface DropdownProps {
    options: Option[];
    name: string;
}

const Dropdown: React.FC<DropdownProps> = ({ name, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [maxWidth, setMaxWidth] = useState('max-content');

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const maxWidth = Math.max(...options.map(option => option.label.length));
            setMaxWidth(`${maxWidth * 10}px`);
        }
        const closeDropdown = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('click', closeDropdown);
        } else {
            window.removeEventListener('click', closeDropdown);
        }

        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, [isOpen]);

    return (
        <div className="z-50 relative hover:bg-[#2f368e] rounded-lg duration-500" ref={dropdownRef}>
            <div  className="flex w-18 h-9 items-center justify-center hover:text-white">
                <button onClick={toggleDropdown} className="flex tracking-wider duration-300">
                    {name}
                    {!isOpen ? (
                        <AiOutlineCaretDown className="my-1 " />
                    ) : (
                        <AiOutlineCaretUp className="my-1" />
                    )}
                </button>
            </div>
            <div></div>
            {isOpen && (
                <div className="bg-[#ebebeb] absolute top-12 flex flex-col p-2" style={{ width: maxWidth }}>
                    {options && options.map((item, i) => (
                        <div key={i} className="flex hover:bg-[#2f368e] hover:text-white duration-500 cursor-pointer rounded-lg h-10" style={{ width: '100%', whiteSpace: 'nowrap' }}>
                            <a href={item.link}>{item.label}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;