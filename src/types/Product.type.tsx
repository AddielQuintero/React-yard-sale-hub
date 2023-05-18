// Category
export interface TCategory {
  id: number
  image: string
  name: string
  creationAt: Date
  updatedAt: Date
}

export interface TSelectCategory {
  id: number
  name: string
}

export const Categories: TSelectCategory[] = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Clothes' },
  { id: 3, name: 'Electronics' },
  { id: 4, name: 'Furniture' },
  { id: 5, name: 'Shoes' },
  { id: 6, name: 'Others' },
]

// Product
interface TIdProduct {
  id: number
}

export interface TProduct extends TIdProduct {
  title: string
  price: number
  description: string
  images: string[]
  category: TCategory
  creationAt: Date
  updatedAt?: Date
  author: string
  slug: string
  condition: string
  refund: string
  weight: number
  store: string
  availability: string
  rate: number
  reviews: number
  stock: number
}

export interface ImageProps {
  src: string
  alt: string
}

export interface InfoProps {
  description: string
  reviews: number
  rate: number
  condition: string
  refund: string
  weight: number
  store: string
  availability: string
}

export interface OptionsProps {
  price: number
  stock: number
  handleAdd: () => void
}

export interface PriceProps {
  className: string
  classPrice?: string
  price: number
}

export interface TFilters {
  category: string
  minPrice: number
}
export const DefaultFilters = {
  category: 'All',
  minPrice: 0,
}
