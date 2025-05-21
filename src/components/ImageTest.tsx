import React from 'react';

const ImageTest = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Image Test Component</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Direct Image Tag:</h3>
        <img 
          src="/portfolio/pictures/my pic.png" 
          alt="Avatar" 
          className="w-48 h-48 object-cover border rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Image with Import:</h3>
        <img 
          src={`${import.meta.env.BASE_URL}pictures/my pic.png`}
          alt="Avatar with Import" 
          className="w-48 h-48 object-cover border rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Image with Public URL:</h3>
        <img 
          src="https://ajx1707.github.io/portfolio/pictures/my pic.png" 
          alt="Avatar with Public URL" 
          className="w-48 h-48 object-cover border rounded"
        />
      </div>
    </div>
  );
};

export default ImageTest;
