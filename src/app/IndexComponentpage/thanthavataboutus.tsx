import { FiCheckCircle } from "react-icons/fi";

function thanthavataboutus() {
    return (
        <div className="flex w-auto h-auto pt-10 pb-10 bg-gray-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="w-[1/2] p-10">
                        <p className="text-gray-500 text-base">ธัธวัช การเกษตร</p>
                        <p className="font-bold text-4xl pt-2">มุ่งมั่นส่งมอบความพึงพอใจสูงสุดให้ เกษตรกรทุกท่านด้วย ผลิตภัณฑ์ที่มี คุณภาพดีเยี่ยม</p>
                    </div>
                    <div className="w-[1/2] p-10 flex flex-col">
                        <div className="flex flex-col">
                            <FiCheckCircle className="h-5 w-5 my-2"/>
                            <p className="text-base font-bold pb-3">ประสบการ์ณกว่า 20 ปีในธุรกิจการเกษตรเราเข้าใจความต้องการของคุณ</p>
                        </div>
                        <div className="flex flex-col">
                            <FiCheckCircle className="h-5 w-5 my-2"/>
                            <p className="text-base font-bold pb-3">ทีมงานมืออาชีพคอยให้คำปรึกษาและบริการหลังการขายอย่างเต็มที่</p>
                        </div>
                        <div className="flex flex-col">
                            <FiCheckCircle className="h-5 w-5 my-2"/>
                            <p className="text-base font-bold pb-3">จัดส่งทั่วประเทศ ด้วยระบบโลจิศติกส์ที่รวดเร็วและปลอดภัย</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default thanthavataboutus