import SlideADS from "./IndexComponentpage/slideADS";
import PromotionAndTypeData from "./IndexComponentpage/promotionAndtypeData";
import Codepromotiondata from "./IndexComponentpage/codepromotiondata";
import Contackus from "./IndexComponentpage/contackus";
import MonthlyPromotionData from "./IndexComponentpage/monthlyPromotionData";
import BestsellingproductsData from "./IndexComponentpage/bestsellingproductsData";
import DealandnewproductData from "./IndexComponentpage/dealandnewproductData";
import AllproductIndexData from "./IndexComponentpage/allproductIndexData";
import Thanthavataboutus from "./IndexComponentpage/thanthavataboutus";



export default function Home() {
  return (
    <main className="relative min-h-screen flex-grow" style={{ minHeight: "-webkit-fill-available", WebkitOverflowScrolling: "touch" }}>
      <SlideADS />
      <PromotionAndTypeData />
      <Codepromotiondata />
      <MonthlyPromotionData />
      <BestsellingproductsData />
      <DealandnewproductData/>
      <AllproductIndexData/>
      <Thanthavataboutus/>
      <Contackus />
    </main>
  );
}
