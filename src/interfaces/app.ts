export interface IAppNavbar {
  logo: string;
  title: string;
  pages: string[];
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
