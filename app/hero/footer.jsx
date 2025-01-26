import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-30">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-between items-center border-b border-gray-800">
        <div className="text-2xl font-bold tracking-wider mr-8">BOTOL</div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="hover:text-gray-300 transition-colors">Shop</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact us</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Journal</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Custom</a>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4 gap-4">
          <a
            href="#"
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            {/* Facebook Icon */}
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        <nav className="flex items-center space-x-8">
          <a href="#" className="hover:text-gray-300 transition-colors">FAQ's</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Returns</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Ordering</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Shipping</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Personalization Policies</a>
        </nav>
      </div>

      <div className="text-center py-4 text-gray-500 text-sm space-y-2">
        <p>Copyright © 2023 BOTOL. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
