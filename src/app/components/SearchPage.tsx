"use client";
import { ProductType } from '../types/type'
import { client } from '@/sanity/lib/client'
import ProductList from '../components/ProductList'
import { useEffect, useState } from 'react';

interface SearchPageProps {
  query: string;
}

const SearchPage: React.FC<SearchPageProps> = ({ query }) => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  let setQuery = query.replace(/-/g, ' ');
  let querySetter= setQuery.split(' ');
  useEffect(() => {
    const fetchData = async () => {
      const searchQuery = `*[_type == "products"]{
        _id,
        title,
        image,
        price,
        badge,
        priceWithoutDiscount
      }`;
      const fetchedProductData: ProductType[] = await client.fetch(searchQuery);
      const filteredProductData = fetchedProductData.filter(product =>
        querySetter.every(word => product.title.toLowerCase().includes(word.toLowerCase()))
      );
      setProductData(filteredProductData);
      setLoading(false);
    };

    fetchData();
  }, [querySetter]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-col gap-10">
        <h2 className="text-lg lg:text-3xl font-semibold text-main">Search Results for &quot;{setQuery}&quot;</h2>
        <ProductList productData={productData} />
      </div>
    </>
  )
}

export default SearchPage