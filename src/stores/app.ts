// Utilities
import { IAppStore } from '@/interfaces/store'
import { initialStoreState } from '@/mocks'
import { defineStore } from 'pinia'

const initialState: IAppStore = {
  category: [],
  product: [],
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
console.log({ initialStoreState })
export const useAppStore = defineStore('app', {
  state: () => initialStoreState,
  getters: () => ({}),
})
