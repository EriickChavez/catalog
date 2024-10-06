export interface IProduct {
  id: string;
  title: string;
  description: string;
  cover: string;
  status: string;
  media: string[];
  price: number;
  discount: number;
  categories: Array<string>;
}
