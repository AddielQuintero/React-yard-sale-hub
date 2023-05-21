// Category
export interface TCategory {
  id: number
  image: string
  name: string
  creationAt: Date
  updatedAt: Date
}

export interface TSelectCategory {
  value: string
  label: string
}

export const Category: TSelectCategory[] = [
  { value: 'All', label: 'All' },
  { value: 'Clothes', label: 'Clothes' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Furniture', label: 'Furniture' },
  { value: 'Shoes', label: 'Shoes' },
  { value: 'Others', label: 'Others' },
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
