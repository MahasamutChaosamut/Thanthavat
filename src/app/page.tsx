import SlideADS from "./containers/slideADS";
import PromotionAndTypeData from "./containers/promotionAndtypeData";
import Codepromotiondata from "./containers/codepromotiondata";
import Contackus from "./containers/contackus";
import MonthlyPromotionData from "./containers/monthlyPromotionData";
import BestsellingproductsData from "./containers/bestsellingproductsData";

export default function Home() {
  return (
    <main className="relative min-h-screen flex-grow " style={{ minHeight: "-webkit-fill-available", WebkitOverflowScrolling: "touch" }}>
      <SlideADS />
      <PromotionAndTypeData />
      <Codepromotiondata />
      <MonthlyPromotionData />
      <BestsellingproductsData />
      <Contackus />
    </main>
  );
}
