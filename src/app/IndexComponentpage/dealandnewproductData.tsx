import Dealandnewproducts from "./dealandnewproduct"
const dealdata = [
  {
      id: 1,
      image: '/images/Tricolik.png',
      link: '/',
      name: '3thingtocare',
      type : "สารกำจัดหญ้า",
      price : 1000,
      volumn : "500 CC",
      isinCart : true,
      category_ids : [1],
      discount : 70
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
      category_ids : [1,2],
      discount : 20
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
      category_ids : [2],
      discount : 20
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
      category_ids : [3],
      discount : 10
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
      category_ids : [4],
      discount : 50
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
      category_ids : [4,5],
      discount : 40
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
      category_ids : [5],
      discount : 20
  },
]
const newproductdata = [
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
]

function dealandnewproductData() {
  return (
    <Dealandnewproducts deal={dealdata} newproduct={newproductdata}/>
  )
}

export default dealandnewproductData