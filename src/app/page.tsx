import Image from "next/image";
import HeroSection from "./components/HeroSection";
import BrandsLogo from "./components/BrandsLogo";
import FeatureProducts from "./components/FeatureProducts";
import CategoryProducts from "./components/CategoryProducts";
import Arrival from "./components/Arrival";
import Products from "./components/Products";

export default async function Home() {
  return(
    <>
    <HeroSection/>
    <BrandsLogo/>
    {await FeatureProducts()}
    {await CategoryProducts()}
    <Arrival/>
    {await Products()}
    </>

  )
}
