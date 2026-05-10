export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
}

export interface NewBook {
  title: string;
  author: string;
  year: string;
  genre: string;
}
