

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="relative w-[100vw] h-[100vw]">
      {/* Static gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-50 mix-blend-darken"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-50 mix-blend-darken"></div>
      
      {/* Rotating image */}
      <div className="absolute inset-0 animate-custom-spin mix-blend-plus-lighter">
        <img 
          src="https://res.cloudinary.com/fedexx/image/upload/v1726329088/Dise%C3%B1o_sin_t%C3%ADtulo_3_p1jc6z.png" 
          alt="Loading" 
          className="w-full h-full object-contain "
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;