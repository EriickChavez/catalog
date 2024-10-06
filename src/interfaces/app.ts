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
  style: IAppStyle;
}
export interface IAppStyle {
  colors: IAppColors;
  border: IAppBorder;
}
export interface IAppColors {
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  alternatePrimaryText: string;
  alternateSecondaryText: string;
  alternateTertiaryText: string;
  primaryBackground: string;
  secondaryBackground: string;
  tertiaryBackground: string;
  cardColor: string;
  borderColor: string;
}
export interface IAppBorder {
  cardBorderRadius: number;
  cardImageBorderRadius: number;
}
