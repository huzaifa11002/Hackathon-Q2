import HeroSection from "./components/HeroSection";
import BrandsLogo from "./components/BrandsLogo";
import FeatureProducts from "./components/FeatureProducts";
import CategoryProducts from "./components/CategoryProducts";
import Arrival from "./components/Arrival";
import Products from "./components/Products";
import {Suspense} from "react"
export default async function Home() {

  return (
    <>
      <HeroSection />

      <BrandsLogo />

      <Suspense>
      {await FeatureProducts()}
      </Suspense>
      
      <Suspense>
      {await CategoryProducts()}
      </Suspense>

      <Arrival />

      <Suspense>
      {await Products()}
      </Suspense>

    </>

  )
}
