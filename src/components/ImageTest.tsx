import React from 'react';

const ImageTest = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Image Test Component</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">From Public Folder:</h3>
        <img
          src="/portfolio/images/avatar.png"
          alt="Avatar from Public"
          className="w-48 h-48 object-cover border rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Direct URL with spaces encoded:</h3>
        <img
          src="/portfolio/pictures/my%20pic.png"
          alt="Avatar with encoded spaces"
          className="w-48 h-48 object-cover border rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">With Full GitHub Pages URL:</h3>
        <img
          src="https://ajx1707.github.io/portfolio/images/avatar.png"
          alt="Avatar with Full URL"
          className="w-48 h-48 object-cover border rounded"
        />
      </div>
    </div>
  );
};

export default ImageTest;
