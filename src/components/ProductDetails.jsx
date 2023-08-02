// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
// import {TbTruckDelivery, TbCalendar} from 'react-icons/tb';

// const ProductDetails = ({ products }) => {
//   const { id } = useParams();

//   const product = products.find((product) => product.id === id);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   const [quantity, setQuantity] = useState(1);

//   const handleIncrement = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   const handleWishlistClick = () => {
//     console.log('Wishlist clicked');
//   };

//   const handleBuyNowClick = () => {
//     console.log('Buy Now clicked');
//   };

//   const toSentenceCase = (str) => {
//     if (!str) return '';
//     return str
//       .trim()
//       .toLowerCase()
//       .replace(/(^|\.\s+)([a-z])/g, (match, p1, p2) => p1 + p2.toUpperCase());
//   };

//   const generateRandomRating = () => {
//     return (Math.random() * 5).toFixed(1);
//   };

//   const randomRating = generateRandomRating();

//   const fullStars = Math.floor(randomRating);
//   const hasHalfStar = randomRating - fullStars >= 0.5;

//   const starIcons = [];

//   for (let i = 0; i < fullStars; i++) {
//     starIcons.push(<FaStar key={i} className="text-[#003d2a]" />);
//   }

//   if (hasHalfStar) {
//     starIcons.push(<FaStarHalfAlt key={fullStars} className="text-[#003d2a]" />);
//   }

//   return (
//     <div className="flex gap-4 mt-8">
//       <div className="w-1/2 h-auto overflow-hidden">
//         <img
//           className="w-full h-auto object-cover rounded-lg"
//           src={product.imageUrl}
//           alt={product.title}
//         />
//       </div>

//       <div className="w-1/2 px-8">
//         <h2 className="text-3xl font-semibold mb-4">{toSentenceCase(product.title)}</h2>
//         <p className="mb-4">{toSentenceCase(product.description)}</p>
//         <div className="flex">
//           {starIcons}
//           <p className="ml-2">(210)</p>
//         </div>
//         <hr className='mb-4' />
//         <p className="font-bold text-xl mb-2">{product.price} or $249/month</p>
//         <p className="text-sm mb-4">Suggested payments with 6 month financing</p>
        
//         <hr className='mb-4' />
//         <div className="flex items-baseline gap-4 mb-4">
//           <div className='bg-[#f5f5f5] rounded-2xl'>
//           <button
//             className="px-3 py-2 border rounded focus:outline-none"
//             onClick={handleDecrement}
//           >
//             -
//           </button>
//           <span className="px-4 py-2 border-t border-b">
//             {quantity}
//           </span>
//           <button
//             className="px-3 py-2 border rounded focus:outline-none"
//             onClick={handleIncrement}
//           >
//             +
//           </button>
//           </div>
//           <p className="mr-2">only <span className='text-red-700'>12</span> items left hurry up!</p>
//         </div>
//         <div className="flex">
//           <button
//             className="px-6 py-3 rounded-full bg-[#003d2a] text-white mr-4"
//             onClick={handleBuyNowClick}
//           >
//             Buy Now
//           </button>
//           <button
//             className="px-6 py-3 rounded-full border border-[#003d2a] text-[#003d2a]"
//             onClick={() => console.log('Add to Cart clicked')}
//           >
//             Add to Cart
//           </button>
//         </div>

//         <div className="flex gap-4 flex-col mt-8">
//           <div className="flex gap-4 flex-row rounded-lg bg-white p-2 shadow-md">
//             <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
//               <TbTruckDelivery size={24} color='orange' />
//             </div>
//             <div className='flex flex-col'>
//             <p className="text-lg font-semibold mb-2">Free Delivery</p>
//             <p className="text-gray-500 underline">Enter your postal code for delivery availablity</p>
//             </div>
//           </div>

//           <div className="flex gap-4 flex-row rounded-lg bg-white p-2 shadow-md">
//             <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
//               <TbCalendar size={24} color='orange' />
//             </div>
//             <div className='flex flex-col'>
//             <p className="text-lg font-semibold mb-2">Return Delivery</p>
//             <p className="text-gray-500">Free 30 days delivery. <span className='underline'>Details</span></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TbTruckDelivery, TbCalendar } from 'react-icons/tb';
import Breadcrumbs from './Breadcrumbs';

const ProductDetails = ({ products }) => {
  const { id } = useParams();

  // Find the product with the matching id
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleWishlistClick = () => {
    // Implement the wishlist functionality here (toggle filled/empty heart)
    console.log('Wishlist clicked');
  };

  const handleBuyNowClick = () => {
    // Implement the Buy Now functionality here
    console.log('Buy Now clicked');
  };

  const toSentenceCase = (str) => {
    if (!str) return '';
    return str
      .trim()
      .toLowerCase()
      .replace(/(^|\.\s+)([a-z])/g, (match, p1, p2) => p1 + p2.toUpperCase());
  };

  const generateRandomRating = () => {
    return (Math.random() * 5).toFixed(1);
  };

  const randomRating = generateRandomRating();

  const fullStars = Math.floor(randomRating);
  const hasHalfStar = randomRating - fullStars >= 0.5;

  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FaStar key={i} className="text-[#003d2a]" />);
  }

  // Render half star
  if (hasHalfStar) {
    starIcons.push(<FaStarHalfAlt key={fullStars} className="text-[#003d2a]" />);
  }

  return (
    <>
    <Breadcrumbs />
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      {/* Product Image */}
      <div className="w-full md:w-1/2 h-auto overflow-hidden">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-4">{toSentenceCase(product.title)}</h2>
        <p className="mb-4">{toSentenceCase(product.description)}</p>
        <div className="flex">
          {/* Render star icons */}
          {starIcons}
          <p className="ml-2">(210)</p>
        </div>
        <hr className="mb-4" />
        <p className="font-bold text-xl mb-2">{product.price} or $249/month</p>
        <p className="text-sm mb-4">Suggested payments with 6 month financing</p>

        {/* Quantity Selector */}
        <hr className="mb-4" />
        <div className="flex items-baseline gap-4 mb-4">
          <div className="bg-[#f5f5f5] rounded-2xl">
            <button
              className="px-3 py-2 border rounded focus:outline-none"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="px-4 py-2 border-t border-b">{quantity}</span>
            <button
              className="px-3 py-2 border rounded focus:outline-none"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <p className="mr-2">
            only <span className="text-red-700">12</span> items left hurry up!
          </p>
        </div>

        {/* Buy Now and Add to Cart Buttons */}
        <div className="flex">
          <button
            className="px-6 py-3 rounded-full bg-[#003d2a] text-white mr-4"
            onClick={handleBuyNowClick}
          >
            Buy Now
          </button>
          <button
            className="px-6 py-3 rounded-full border border-[#003d2a] text-[#003d2a] focus:border-0 focus:ring-0"
            onClick={() => console.log('Add to Cart clicked')}
          >
            Add to Cart
          </button>
        </div>

        <div className="flex gap-4 flex-col mt-8">
          {/* First Div */}
          <div className="flex gap-4 flex-row rounded-lg bg-white p-2 shadow-md">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-[#fde3a7]">
              <TbTruckDelivery size={24} color="orange" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold mb-2">Free Delivery</p>
              <p className="text-gray-500 underline">
                Enter your postal code for delivery availability
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="flex gap-4 flex-row rounded-lg bg-white p-2 shadow-md">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-[#fde3a7]">
              <TbCalendar size={24} color="orange" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold mb-2">Return Delivery</p>
              <p className="text-gray-500">
                Free 30 days delivery. <span className="underline">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
