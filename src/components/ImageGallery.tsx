import React from 'react';
import { Image } from '../types';

interface ImageGalleryProps {
  images: Image[];
  isLoading: boolean;
  viewMode: 'grid' | 'list';
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isLoading, viewMode }) => {
  if (isLoading) {
    return <div className="text-center text-gray-600">Loading images...</div>;
  }

  if (images.length === 0) {
    return <div className="text-center text-gray-600">No images found.</div>;
  }

  return (
    <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
      {images.map((image) => (
        <div key={image.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${viewMode === 'list' ? 'flex items-center' : ''}`}>
          <img
            src={image.url}
            alt={image.name}
            className={`w-full h-48 object-cover ${viewMode === 'list' ? 'w-24 h-24' : ''}`}
          />
          <div className={`p-4 ${viewMode === 'list' ? 'flex-grow' : ''}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.name}</h3>
            <p className="text-sm text-gray-600">
              Last modified: {new Date(image.lastModified).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;