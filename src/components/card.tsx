// components/Card.tsx (optional - or inline in your page)
import React from "react";

interface CardProps {
  name: string;
  title: string;
  bgText: string;
  // If you have an image URL, you could add a prop like `imageUrl: string`
}

const Card: React.FC<CardProps> = ({ name, title, bgText }) => (
  <div className="w-64 rounded-xl overflow-hidden shadow-lg relative">
    <div className="w-full h-96 relative bg-gray-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-500 font-medium">{bgText}</span>
        {/* Uncomment below if using next/image with a valid image URL */}
        {/* <Image 
          src="/path-to-image.jpg" 
          alt={name} 
          fill 
          className="object-cover"
        /> */}
      </div>
      {/* Transparent gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
      {/* Text at the bottom */}
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <div className="mt-2">
          <div className="bg-gradient-to-r from-[#0B3E27] to-[#047A43] text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-md inline-block">
            {title}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
