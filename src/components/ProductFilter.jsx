import React, { useState } from 'react';

const ProductFilter = ({ products, setFilteredProducts }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const handleFilterChange = (priceRange) => {
    setSelectedPriceRange(priceRange);

    if (priceRange === '') {
      setFilteredProducts(products);
    } else {
      const [minPrice, maxPrice] = priceRange.split('-').map(parseFloat);
      const filtered = products.filter((product) => {
        const productPrice = parseFloat(product.price.replace('$', ''));
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setFilteredProducts(filtered);
    }
  };

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);

    let sortedProducts = [...products];
    switch (sortOption) {
      case 'alphabetical':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'priceLowToHigh':
        sortedProducts.sort((a, b) =>
          parseFloat(a.price.replace('$', '')) -
          parseFloat(b.price.replace('$', ''))
        );
        break;
      case 'priceHighToLow':
        sortedProducts.sort((a, b) =>
          parseFloat(b.price.replace('$', '')) -
          parseFloat(a.price.replace('$', ''))
        );
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  const priceRanges = [
    '',
    '0-50',
    '51-100',
    '101-200',
    '201-300',
    '301-500',
  ];

  const sortOptions = [
    { label: 'Alphabetical', value: 'alphabetical' },
    { label: 'Price: Low to High', value: 'priceLowToHigh' },
    { label: 'Price: High to Low', value: 'priceHighToLow' },
  ];

  return (
    <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
      {/* Price Range */}
      <div className="mb-4 md:mb-0 flex items-center gap-4">
        <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
          Filter By Price:
        </label>
        <div className="flex flex-wrap space-x-2">
          {priceRanges.map((range) => (
            <button
              key={range}
              className={`border rounded-full py-1 px-3 ${
                selectedPriceRange === range
                  ? 'bg-[#003d2a] text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => handleFilterChange(range)}
            >
              {range === '' ? 'All' : range}
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="flex items-center mt-2 md:mt-0">
        <label htmlFor="sortOption" className="block text-sm font-medium text-gray-700">
          Sort By:
        </label>
        <select
          id="sortOption"
          className="mt-1 ml-2 rounded-full block w-full md:w-auto pl-3 pr-10 py-2 text-base bg-gray-100 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedSortOption}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Sort By</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
