import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import AllProducts from './components/AllProducts';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.unsplash.com/photos/random';


function App() {
  const [products, setProducts] = useState([]);
  const generateRandomPrice = () => {
    const minPrice = 10;
    const maxPrice = 500;
    return `$${(Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2)}`;
  };

  const generateRandomRating = () => {
    return (Math.random() * 5).toFixed(1);
  };

  const randomRating = generateRandomRating();

  const fullStars = Math.floor(randomRating);
  const hasHalfStar = randomRating - fullStars >= 0.5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get(API_URL, {
          params: {
            client_id: API_KEY,
            count: 30,
            orientation: 'squarish',
            query: 'fashion',
          },
        });

        const productData = response.data.map((image, index) => ({
          id: `product-${index + 1}`,
          title: image.user.name || 'Placeholder Title',
          description: image.alt_description || 'Placeholder description for the product.',
          price: generateRandomPrice(),
          rating: generateRandomRating(),
          imageUrl: image.urls.regular,
          isWishlist: false,
        }));

        setProducts(productData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Router>
        <AnnouncementBar />
        <div className="mx-auto w-11/12">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<ProductList products={products} />} />
              <Route path="/product/:id" element={<ProductDetails products={products} />} />
              <Route path="/products" element={<AllProducts products={products} />} />
              <Route path="/adidas" element={<AllProducts products={products} query="adidas" />} />
              <Route path="/puma" element={<AllProducts products={products} query="puma" />} />
              <Route path="/nike" element={<AllProducts products={products} query="nike" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
