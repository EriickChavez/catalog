// Utilities
import { IAppStore } from '@/interfaces/store'
import { defineStore } from 'pinia'

const initialState: IAppStore = {
  category: [],
  product: [],
  configuration: {
    navbar: {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIL5WED7nHlqXA00N12UhdxxW1D9xhVNFPow&s',
      title: '',
      pages: ['Home', 'Products', 'Solutions', 'Pircing'],
      searchBar: false,
    },
    banner: [
      {
        id: '1',
        screen: ['Home'],
        title: 'Pantalla de presentación',
        description: 'New Apple iPhone 15 Pro Max (256GB, Blue Titanium) Online – Croma',
        img: 'https://tienda.tksonline.mx/cache/storage/2024/July/week1/1939271_300822_5_zmrbwu-500x500.webp',
        background: '#25282D',
        color: '#FFFFFF',
      },
    ],
    services: [
      {
        id: '2',
        title: 'Servicio 2',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIL5WED7nHlqXA00N12UhdxxW1D9xhVNFPow&s',
        description: ' Vivamus nec consequatmagna. Nullam tinciduntdictum arcu, ac tristiqueest molestie non. Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere',
        background: '#25282D',
        color: '#FFFFFF',
      },
      {
        id: '1',
        title: 'Servicio 1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIL5WED7nHlqXA00N12UhdxxW1D9xhVNFPow&s',
        description: ' Vivamus nec consequatmagna. Nullam tinciduntdictum arcu, ac tristiqueest molestie non. Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere',
        background: '#25282D',
        color: '#FFFFFF',
      },
      {
        id: '3',
        title: 'Servicio 3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIL5WED7nHlqXA00N12UhdxxW1D9xhVNFPow&s',
        description: ' Vivamus nec consequatmagna. Nullam tinciduntdictum arcu, ac tristiqueest molestie non. Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere',
        background: '#25282D',
        color: '#FFFFFF',
      },
    ],
  },
}

export const useAppStore = defineStore('app', {
  state: () => initialState,
  getters: () => ({}),
})
