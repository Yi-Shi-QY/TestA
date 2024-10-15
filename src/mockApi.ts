import { Folder } from './types';

const mockFolders: Folder[] = [
  {
    id: '1',
    name: 'Nature',
    images: [
      {
        id: '1',
        name: 'Mountain Landscape',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        lastModified: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Forest Path',
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        lastModified: new Date().toISOString(),
      },
    ],
  },
  {
    id: '2',
    name: 'Urban',
    images: [
      {
        id: '3',
        name: 'City Skyline',
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80',
        lastModified: new Date().toISOString(),
      },
      {
        id: '4',
        name: 'Beach Sunset',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
        lastModified: new Date().toISOString(),
      },
    ],
  },
];

export const fetchMockFolders = (): Promise<Folder[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFolders);
    }, 500); // Simulate network delay
  });
};