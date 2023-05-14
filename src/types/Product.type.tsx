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

export const categories: TSelectCategory[] = [
  { id: 1, name: 'Clothes' },
  { id: 2, name: 'Electronics' },
  { id: 3, name: 'Furniture' },
  { id: 4, name: 'Shoes' },
  { id: 5, name: 'Others' },
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
  weight: string
  store: string
  availability: string
}

// const { images, description, price } = product


// Cart
export interface CartListProps {
  cart: TProduct[]
  className?: string
  handleClose?: () => void
}
