/* eslint-disable semi */
/* eslint-disable quotes */

import { IAppBanner, IAppConfiguration, IAppNavbar, IAppServices } from "@/interfaces/app";
import { ICategory } from "@/interfaces/category";
import { IAppStore } from "@/interfaces/store";

const navbar: IAppNavbar = {
  logo: "https://via.placeholder.com/150x150.png?text=Books",
  title: "",
  pages: [
    {
      id: "1",
      text: "Home",
      route: "/",
    },
    {
      id: "2",
      text: "Products",
      route: "/products",
    },
  ],
  searchBar: false,
};

const banner: IAppBanner[] = [
  {
    id: "1",
    screen: ["Home"],
    title: "Pantalla de presentación",
    description:
      "New Apple iPhone 15 Pro Max (256GB, Blue Titanium) Online – Croma",
    img: "https://tienda.tksonline.mx/cache/storage/2024/July/week1/1939271_300822_5_zmrbwu-500x500.webp",
    background: "#25282D",
    color: "#FFFFFF",
  },
];

const services: IAppServices[] = [
  {
    id: "2",
    title: "Servicio 2",
    img: "https://via.placeholder.com/150x150.png?text=Books",
    description:
      " Vivamus nec consequatmagna. Nullam tinciduntdictum arcu, ac tristiqueest molestie non. Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere",
    background: "#25282D",
    color: "#FFFFFF",
  },
  {
    id: "1",
    title: "Servicio 1",
    img: "https://via.placeholder.com/150x150.png?text=Books",
    description:
      " Vivamus nec consequatmagna. Nullam tinciduntdictum arcu, ac tristiqueest molestie non. Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere",
    background: "#25282D",
    color: "#FFFFFF",
  },
  {
    id: "3",
    title: "Servicio 3",
    img: "https://via.placeholder.com/150x150.png?text=Books",
    description:
      " Vivamus nec consequatmagna. Nullam tinciduntdictum arcu, ac tristiqueest molestie non. Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere",
    background: "#25282D",
    color: "#FFFFFF",
  },
];
const category: ICategory[] = [
  {
    id: "cat-0.6431190096048534",
    title: "Books",
    description: "Toys for children of all ages.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "inactive",
    price: 10.59,
  },
  {
    id: "cat-0.31952639266032934",
    title: "Electronics",
    description: "Clothing for all seasons.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "inactive",
    price: 10.59,
  },
  {
    id: "cat-0.47648451633965205",
    title: "Clothing",
    description: "Category for all kinds of electronics.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "inactive",
    price: 10.59,
  },
  {
    id: "cat-0.330448915415519",
    title: "Furniture",
    description: "Clothing for all seasons.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
    price: 10.59,
  },
  {
    id: "cat-0.3025498947514862",
    title: "Electronics",
    description: "A wide selection of books.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "active",
    price: 10.59,
  },
  {
    id: "cat-0.633799645757585",
    title: "Clothing",
    description: "Furniture for every room in your house.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
    price: 10.59,
  },
  {
    id: "cat-0.8972047198500692",
    title: "Furniture",
    description: "Toys for children of all ages.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "active",
    price: 10.59,
  },
  {
    id: "cat-0.8306464679430197",
    title: "Books",
    description: "Category for all kinds of electronics.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
    price: 10.59,
  },
  {
    id: "cat-0.6932034603003001",
    title: "Electronics",
    description: "A wide selection of books.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
    price: 10.59,
  },
  {
    id: "cat-0.38144211122513716",
    title: "Toys",
    description: "A wide selection of books.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "inactive",
    price: 10.59,
  },
];

const configuration: IAppConfiguration = {
  banner,
  navbar,
  services,
};

const initialStoreState: IAppStore = {
  category,
  productFiltered: [],
  categoryFiltered: [],
  product: [],
  configuration,
};

export { initialStoreState };
