import React, { useState } from 'react';

const AnnouncementBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');
  const [selectedCountry, setSelectedCountry] = useState('USA');

  const languageOptions = [
    { value: 'ENG', label: 'ENG' },
    { value: 'FRA', label: 'FRA' },
    { value: 'ESP', label: 'ESP' },
    // Add more language options here
  ];

  const countryOptions = [
    { value: 'USA', label: 'USA' },
    { value: 'CAN', label: 'Canada' },
    { value: 'UK', label: 'UK' },
    // Add more country options here
  ];

  return (
    <div className="md:bg-[#003d2a] md:text-white px-6 md:px-14 md:py-3 hidden md:flex md:flex-row md:justify-between md:items-center md:w-full ">
      {/* First Part: Phone Number */}
      <div className="mb-2 md:mb-0">
        <span>123-456-7890</span>
      </div>

      {/* Second Part: Announcement */}
      <div className="text-center md:text-left">
        <p>Free shipping on all orders over $50!</p>
      </div>

      {/* Third Part: Language and Location */}
      <div className="flex justify-center md:justify-end">
        <div className="mr-2 md:mr-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-transparent focus:outline-none cursor-pointer px-2 py-1"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value} className='text-black'>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-transparent focus:outline-none cursor-pointer px-2 py-1"
          >
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value} className='text-black'>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
