import { IAppConfiguration } from './app'
import { ICategory } from './category'
import { IProduct } from './product'

export interface IAppStore {
  category: ICategory[];
  product: IProduct[];
  configuration: IAppConfiguration;
}
