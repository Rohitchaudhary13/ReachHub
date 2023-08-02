import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product, rating }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [isButtonFilled, setIsButtonFilled] = useState(false);

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  

  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FaStar key={i} className="text-[#003d2a]" />);
  }

  if (hasHalfStar) {
    starIcons.push(<FaStarHalfAlt key={fullStars} className="text-[#003d2a]" />);
  }

  const handleBuyNowClick = () => {
    setIsButtonFilled(!isButtonFilled);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    setIsWishlist(!isWishlist);
  };

  const toSentenceCase = (str) => {
    if (!str) return '';
    return str
      .trim()
      .toLowerCase()
      .replace(/(^|\.\s+)([a-z])/g, (match, p1, p2) => p1 + p2.toUpperCase());
  };

  

  return (
    <div className="relative">
      {/* Wishlist Heart Icon */}
      <span
        className="absolute cursor-pointer border rounded-full bg-white p-2 top-2 right-2"
        title={isWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        onClick={handleWishlistClick}
      >
        {isWishlist ? <FaHeart size={24} color='red' /> : <FaRegHeart size={24} color='black' />}
      </span>

      <Link to={`/product/${product.id}`}>
      <img
        className="w-full h-32 md:w-full md:h-80 object-cover mb-2 rounded-md"
        src={product.imageUrl}
        alt={product.title}
      />
      </Link>

      {/* Product Details */}
      <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{toSentenceCase(product.title)}</h3>
        <p className="text-lg font-bold">{product.price}</p>
      </div>

      <p className='break-words'>{toSentenceCase(product.description)}</p>
      <div className="flex items-center">
        {/* Render star icons */}
        {starIcons}
        <p className="ml-2">(210)</p>
      </div>

      {/* Buy Now Button */}
      <Link to={`/product/${product.id}`}>
      <button
        className={`mt-4 focus:outline-none px-4 py-2 rounded-full ${
          isButtonFilled ? 'bg-[#003d2a] text-white' : 'border border-[#003d2a] text-[#003d2a]'
        } hover:bg-[#003d2a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#003d2a] focus:ring-opacity-50`}
        onClick={handleBuyNowClick}
      >
        Buy Now
      </button></Link>
      </div>
    </div>
  );
};

export default ProductCard;

// bg-[#003d2a]
