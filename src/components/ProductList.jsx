import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImageBanner from './ImageBanner';
import ProductFilter from './ProductFilter';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      <ImageBanner />
      <div className="mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Images For You!</h2>

        {/* Filter Section */}
        <ProductFilter products={products} setFilteredProducts={setFilteredProducts} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="rounded mb-4">
              <ProductCard product={product} rating={product.rating} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
