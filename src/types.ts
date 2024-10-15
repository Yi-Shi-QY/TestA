export interface Image {
  id: string;
  name: string;
  url: string;
  lastModified: string;
}

export interface Folder {
  id: string;
  name: string;
  images: Image[];
}