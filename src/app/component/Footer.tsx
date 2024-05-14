import Link from 'next/link';

const Footer = () => (
    <footer className="w-full bg-[#1a1e4e] shadow-footer py-10">
        <div className='flex items-center justify-between container mx-auto'>
            <div className='my-5 flex-col'>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Logo.png" alt="Home" className="w-fill h-12 object-cover" />
                    </a>
                <p className='text-[#999dc5]'>Design amazing digita experiences that create more happy in the world</p>
            </div>
            <div className='flex flex-row hidden lg:flex'>
                <ul className='flex-col mx-10'>
                    <p className="text-neutral-400">Product</p>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Overview</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Features</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Solutions</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Tutorials</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Pricing</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Releases</Link></li>
                </ul>
                <ul className='flex-col mx-10'>
                    <p className="text-neutral-400">Resources</p>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Blog</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Newsletter</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Events</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Help centre</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Tutorials</Link></li>
                    <li className="text-neutral-200 hover:text-blue-300 my-2"><Link href={""}>Support</Link></li>
                </ul>
                {/* <div className='flex flex-col mx-10'>
                    <p className='text-white'>Stay up to date</p>
                    <div className='flex flex-row '>
                        <input type="email" className='block bg-gray-200 p-2 my-2 rounded-md ' placeholder='Enter your email' />
                        <button type='submit' className='bg-purple-400 p-2 rounded-md text-white my-2 mx-2 hover:bg-blue-300'>Subscribe</button>
                    </div>
                </div> */}
            </div>
        </div>
        <hr className='my-5 border-purple-400' />
        <div className='flex items-center justify-center lg:justify-between container mx-auto'>
            <p className="text-white">
                Copyright &copy; {new Date().getFullYear()}{' '}
                <a
                    className="font-semibold transition-colors duration-200 ease-in-out hover:text-blue-300"
                    href="https://bytebetter.io/"
                >
                    Byte Better Co., Ltd.
                </a>{' '}
                All rights reserved
            </p>
            <div className="items-center hidden lg:flex text-neutral-400">
                <ul className='flex'>
                    <li className='mx-2 hover:text-blue-300'>
                        <a href={"/"}>Terme</a>
                    </li>
                    <li className='mx-2 hover:text-blue-300'>
                        <a href={"/"}>Drivaey</a>
                    </li>
                    <li className='mx-2 hover:text-blue-300'>
                        <a href={"/"}>Cookies</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;