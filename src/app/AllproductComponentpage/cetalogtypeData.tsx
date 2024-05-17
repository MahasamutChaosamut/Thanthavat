import Cetalogtype from "./cetalogtype"

const category =[
    {
        category_ids : 1,
        type : "เคมีเกษตร",
        parent : [0],
        isselect : false
    },
    {
        category_ids : 2,
        type : "ปุ๋ย",
        parent : [1],
        isselect : false
    },
    {
        category_ids : 3,
        type : "สารปรับปรุงดิน",
        parent : [0],
        isselect : false
    },
    {
        category_ids : 4,
        type : "อาหารสัตว์",
        parent : [3],
        isselect : false
    },
    {
        category_ids : 5,
        type : "ระบบน้ำ",
        parent : [0],
        isselect : false
    },
    {
        category_ids : 6,
        type : "Set ปุ๋ย ยา",
        parent : [0],
        isselect : false
    },
    {
        category_ids : 7,
        type : "วัสดุ อุปกรณ์",
        parent : [0],
        isselect : false
    },
]
const deal = [
    {
        deal_ids : 1,
        type : "โปรโมชั่นพิเศษ",
        isselect : false
    },
    {
        deal_ids : 2,
        type : "สินค้าขายดี",
        isselect : false
    },
    {
        deal_ids : 3,
        type : "ลดราคาพิเศษ",
        isselect : false
    },
    {
        deal_ids : 4,
        type : "ล้างสต๊อก",
        isselect : false
    }
]

function cetalogtypeData() {
  return (
    <Cetalogtype cetagory={category} deal={deal}/>
  )
}

export default cetalogtypeData