/* eslint-disable semi */
/* eslint-disable quotes */
export interface ICategory {
  id: string;
  title: string;
  description: string;
  cover: string;
  status: string;
}

export interface IAppNavbarPages {
  id: string;
  text: string;
  route: string;
}

export interface IAppNavbar {
  logo: string;
  title: string;
  pages: IAppNavbarPages[];
  searchBar: boolean;
}

export interface IAppBanner {
  id: string;
  screen: string[];
  title: string;
  description: string;
  img: string;
  background: string;
  color: string;
}
export interface IAppServices {
  id: string;
  title: string;
  img: string;
  description: string;
  color: string;
  background: string;
}
export interface IAppConfiguration {
  navbar: IAppNavbar;
  banner: IAppBanner[];
  services: IAppServices[];
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  cover: string;
  status: string;
  media: string[];
}

export interface IAppStore {
  category: ICategory[];
  product: IProduct[];
  configuration: IAppConfiguration;
}

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
  },
  {
    id: "cat-0.31952639266032934",
    title: "Electronics",
    description: "Clothing for all seasons.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "inactive",
  },
  {
    id: "cat-0.47648451633965205",
    title: "Clothing",
    description: "Category for all kinds of electronics.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "inactive",
  },
  {
    id: "cat-0.330448915415519",
    title: "Furniture",
    description: "Clothing for all seasons.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
  },
  {
    id: "cat-0.3025498947514862",
    title: "Electronics",
    description: "A wide selection of books.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "active",
  },
  {
    id: "cat-0.633799645757585",
    title: "Clothing",
    description: "Furniture for every room in your house.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
  },
  {
    id: "cat-0.8972047198500692",
    title: "Furniture",
    description: "Toys for children of all ages.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "active",
  },
  {
    id: "cat-0.8306464679430197",
    title: "Books",
    description: "Category for all kinds of electronics.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
  },
  {
    id: "cat-0.6932034603003001",
    title: "Electronics",
    description: "A wide selection of books.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "archived",
  },
  {
    id: "cat-0.38144211122513716",
    title: "Toys",
    description: "A wide selection of books.",
    cover: "https://via.placeholder.com/150/24f355",
    status: "inactive",
  },
];

const configuration: IAppConfiguration = {
  banner,
  navbar,
  services,
};

const initialStoreState: IAppStore = {
  category,
  product: [],
  configuration,
};

export { initialStoreState };
