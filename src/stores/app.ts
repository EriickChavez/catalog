// Utilities
import { IAppStore } from '@/interfaces/store'
import { initialStoreState } from '@/mocks'
import { defineStore } from 'pinia'

const initialState: IAppStore = {
  category: [],
  product: [],
  categoryFiltered: [], // Añade las propiedades faltantes
  productFiltered: [],
  configuration: {
    navbar: {
      logo: '',
      title: '',
      pages: [],
      searchBar: false,
    },
    banner: [],
    services: [],
  },
}

export const useAppStore = defineStore('app', {
  state: (): IAppStore => initialStoreState,
  getters: { },
  actions: { },
})
