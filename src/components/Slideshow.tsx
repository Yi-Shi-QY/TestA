import React, { useState, useEffect } from 'react';
import { Folder } from '../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface SlideshowProps {
  folder: Folder;
  onExit: () => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ folder, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % folder.images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [folder.images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + folder.images.length) % folder.images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % folder.images.length);
  };

  const currentImage = folder.images[currentIndex];

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <img
        src={currentImage.url}
        alt={currentImage.name}
        className="max-w-full max-h-full object-contain"
      />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
        <button
          onClick={handlePrevious}
          className="p-2 bg-gray-800 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="text-center">
          <h3 className="text-xl font-semibold">{currentImage.name}</h3>
          <p className="text-sm">
            {currentIndex + 1} / {folder.images.length}
          </p>
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-800 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <button
        onClick={onExit}
        className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full opacity-70 hover:opacity-100 transition-opacity text-white"
      >
        <X size={24} />
      </button>
    </div>
  );
};

export default Slideshow;