import React from 'react';
import { Folder } from '../types';
import { Folder as FolderIcon } from 'lucide-react';

interface FolderListProps {
  folders: Folder[];
  isLoading: boolean;
  onSelectFolder: (folder: Folder) => void;
  selectedFolder: Folder | null;
}

const FolderList: React.FC<FolderListProps> = ({ folders, isLoading, onSelectFolder, selectedFolder }) => {
  if (isLoading) {
    return <div className="text-center text-gray-600">Loading folders...</div>;
  }

  if (folders.length === 0) {
    return <div className="text-center text-gray-600">No folders found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
            selectedFolder?.id === folder.id ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => onSelectFolder(folder)}
        >
          <div className="p-4 flex items-center space-x-3">
            <FolderIcon size={24} className="text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-800">{folder.name}</h3>
          </div>
          <div className="px-4 pb-4">
            <p className="text-sm text-gray-600">{folder.images.length} images</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;