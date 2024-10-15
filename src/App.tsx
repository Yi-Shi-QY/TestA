import React, { useState, useEffect } from 'react';
import { RefreshCw, Maximize, Minimize } from 'lucide-react';
import FolderList from './components/FolderList';
import Slideshow from './components/Slideshow';
import { Folder } from './types';
import { fetchMockFolders } from './mockApi';

function App() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [isDisplayMode, setIsDisplayMode] = useState(false);

  const fetchFolders = async () => {
    setIsLoading(true);
    try {
      const data = await fetchMockFolders();
      setFolders(data);
    } catch (error) {
      console.error('Error fetching folders:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFolders();
    const intervalId = setInterval(fetchFolders, 60000); // Refresh every minute
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isDisplayMode) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [isDisplayMode]);

  const toggleDisplayMode = () => {
    setIsDisplayMode(!isDisplayMode);
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${isDisplayMode ? 'p-0' : 'p-8'}`}>
      <div className={`${isDisplayMode ? 'w-full h-screen' : 'max-w-6xl mx-auto'}`}>
        {!isDisplayMode && (
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Image Gallery</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={fetchFolders}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <RefreshCw size={20} />
                <span>Refresh</span>
              </button>
              {selectedFolder && (
                <button
                  onClick={toggleDisplayMode}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  <Maximize size={20} />
                  <span>Start Slideshow</span>
                </button>
              )}
            </div>
          </header>
        )}
        {isDisplayMode ? (
          <Slideshow folder={selectedFolder!} onExit={toggleDisplayMode} />
        ) : (
          <FolderList
            folders={folders}
            isLoading={isLoading}
            onSelectFolder={setSelectedFolder}
            selectedFolder={selectedFolder}
          />
        )}
      </div>
    </div>
  );
}

export default App;