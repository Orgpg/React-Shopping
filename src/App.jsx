import { Analytics } from "@vercel/analytics/react";
import CategorySection from "./Components/CategorySection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductSection from "./Components/ProductSection";

export default function App() {
  return (
    <>
      <Header />
      <CategorySection />
      <ProductSection />
      <Footer />
      <Analytics />
    </>
  );
}
