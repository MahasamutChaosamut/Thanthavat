import { Data } from "@react-google-maps/api"
import MonthlyPromotion from "./monthlyPromotion"
const data = [
    {
        id: 1,
        image: '/images/Tricolik.png',
        link: '/',
        name: '3thingtocare',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : true,
        category_ids : [1]
    },
    {
        id: 2,
        image: '/images/Tricolik.png',
        link: '/',
        name: 'HBPage',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [1,2]
    },
    {
        id: 3,
        image: '/images/Tricolik.png',
        link: '/',
        name: 'thantavatpage1',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [2]
    },
    {
        id: 4,
        image: '/images/Tricolik.png',
        link: '#',
        name: 'thantavathowto',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [3]
    },
    {
        id: 5,
        image: '/images/Tricolik.png',
        link: '#',
        name: 'thantavathowto',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [4]
    },
    {
        id: 6,
        image: '/images/Tricolik.png',
        link: '/',
        name: '3thingtocare',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : true,
        category_ids : [4,5]
    },
    {
        id: 7,
        image: '/images/Tricolik.png',
        link: '/',
        name: 'HBPage',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [5]
    },
    {
        id: 8,
        image: '/images/Tricolik.png',
        link: '/',
        name: 'thantavatpage1',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [5]
    },
    {
        id: 9,
        image: '/images/Tricolik.png',
        link: '#',
        name: 'thantavathowto',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [6]
    },
    {
        id: 10,
        image: '/images/Tricolik.png',
        link: '#',
        name: 'thantavathowto',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [7]
    },
    {
        id: 11,
        image: '/images/Tricolik.png',
        link: '/',
        name: '3thingtocare',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [8]
    },
    {
        id: 12,
        image: '/images/Tricolik.png',
        link: '/',
        name: 'HBPage',
        type : "สารกำจัดหญ้า",
        price : 1000,
        volumn : "500 CC",
        isinCart : false,
        category_ids : [9]
    },
    // {
    //     id: 13,
    //     image: '/images/Tricolik.png',
    //     link: '/',
    //     name: 'thantavatpage1',
    //     type : "สารกำจัดหญ้า",
    //     price : 1000,
    //     volumn : "500 CC",
    //     isinCart : false,
    //     category_ids : [9,10]
    // },
    // {
    //     id: 14,
    //     image: '/images/Tricolik.png',
    //     link: '#',
    //     name: 'thantavathowto',
    //     type : "สารกำจัดหญ้า",
    //     price : 1000,
    //     volumn : "500 CC",
    //     isinCart : false,
    //     category_ids : [10]
    // },
    // {
    //     id: 15,
    //     image: '/images/Tricolik.png',
    //     link: '#',
    //     name: 'thantavathowto',
    //     type : "สารกำจัดหญ้า",
    //     price : 1000,
    //     volumn : "500 CC",
    //     isinCart : false,
    //     category_ids : [10]
    // },
];
function monthlyPromotionData() {
    return (
        <MonthlyPromotion data={data} />
    )
}

export default monthlyPromotionData