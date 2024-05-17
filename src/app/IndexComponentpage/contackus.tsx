import { FaFacebook, FaLine, FaTiktok } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
// import GoogleMapsComponent from "../component/googlemap";

function contackus() {
    return (
        <div className="w-full h-90 border-solid pb-5">
            <div className="container mx-auto p-10">
                <div className="flex flex-col">
                    <p className="my-2 font-bold" style={{ fontSize: '14px' }}>ติดต่อเรา</p>
                    <p className="my-2 font-bold" style={{ fontSize: '25px' }}>ช่องทางการสั่งซื้อออนไลน์และสาขาทั้งหมดของเรา</p>
                    <p className="my-2 font-bold" style={{ fontSize: '16px' }}>ประสบการณ์กว่า 20 ปีในธุรกิจการเกษตร เราเข้าใจความต้องการของคุณ</p>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col pt-5">
                        <ul>
                            <li className="my-2">
                                <div className="flex flex-row" >
                                    <FaFacebook className="w-8 h-8 " style={{ color: '#2f368e' }} />
                                    <div className="flex flex-col pl-4">
                                        <p className='font-bold' style={{ fontSize: '16px' }}>Facebook</p>
                                        <a href="#" className="font-semibold transition-colors duration-200 ease-in-out hover:text-[#2f368e]" target="_blank" rel="noopener noreferrer">
                                            ธัญธวัช การเกษตร
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="my-2">
                                <div className="flex flex-row" >
                                    <FaLine className="w-8 h-8 " style={{ color: '#2ccf54' }} />
                                    <div className="flex flex-col pl-4">
                                        <p className='font-bold' style={{ fontSize: '16px' }}>Line@</p>
                                        <p className="">เพิ่มเพื่อน
                                            <a href="#" className="font-semibold transition-colors duration-200 ease-in-out hover:text-[#2f368e]" target="_blank" rel="noopener noreferrer">
                                                {' '}@thanthavat
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="my-2">
                                <div className="flex flex-row" >
                                    <FaTiktok className="w-8 h-8 " style={{ color: '#0f0205' }} />
                                    <div className="flex flex-col pl-4">
                                        <p className='font-bold' style={{ fontSize: '16px' }}>TikTok Shop</p>
                                        <a href="#" className="font-semibold transition-colors duration-200 ease-in-out hover:text-[#2f368e]" target="_blank" rel="noopener noreferrer">
                                            ธัญธวัช การเกษตร
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="my-2">
                                <div className="flex flex-row" >
                                    <BsFillTelephoneFill className="w-8 h-8 " style={{ color: '#0f0205' }} />
                                    <div className="flex flex-col pl-4">
                                        <p className='font-bold' style={{ fontSize: '16px' }}>TikTok Shop</p>
                                        <a href="#" className="font-semibold transition-colors duration-200 ease-in-out hover:text-[#2f368e]" target="_blank" rel="noopener noreferrer">
                                            ธัญธวัช การเกษตร
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex pt-5 jestify-center items-center w-full h-auto">
                        <h1 className="">My googlemap</h1>
                        {/* //<GoogleMapsComponent /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contackus