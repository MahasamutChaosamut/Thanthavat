
import Carousel from './carousel';

const data = [
  {
    id: 1,
    image: '/images/3thingtocare.png',
    link: 'https://flowbite.com/docs/components/dropdowns/',
    title: '3thingtocare',
  },
  {
    id: 2,
    image: '/images/HBPage.png',
    link: 'https://flowbite.com/docs/components/dropdowns/',
    title: 'HBPage',
  },
  {
    id: 3,
    image: '/images/thantavatpage1.png',
    link: '/',
    title: 'thantavatpage1',
  },
  {
    id: 4,
    image: '/images/thantavathowto.png',
    link: '#',
    title: 'thantavathowto',
  },
  {
    id: 5,
    image: '/images/service.png',
    link: 'https://flowbite.com/docs/components/dropdowns/',
    title: 'thantavathowto',
  },
];

export default function SlideADS() {
  return (
      <Carousel data={data}/>
  );
}