// Category
// export interface TCategory {
//   id: number
//   image: string
//   name: string
//   creationAt: Date
//   updatedAt: Date
// }

export interface TSelectCategory {
  value: string
  label: string
}

export const Category: TSelectCategory[] = [
  { value: 'All', label: 'All' },
  { value: 'smartphones', label: 'smartphones' },
  { value: 'laptops', label: 'laptops' },
  { value: 'fragrances', label: 'fragrances' },
  { value: 'skincare', label: 'skincare' },
  // { value: 'groceries', label: 'groceries' },
  // { value: 'home-decoration', label: 'home-decoration' },
  // { value: 'furniture', label: 'furniture' },
  // { value: 'tops', label: 'tops' },
  // { value: 'men-shirts', label: 'men-shirts' },
  // { value: 'men-watches', label: 'men-watches' },
  // { value: 'women-dresses', label: 'women-dresses' },
  // { value: 'women-watches', label: 'women-watches' },
  // { value: 'women-bags', label: 'women-bags' },
  // { value: 'women-jewelry', label: 'women-jewelry' },
  // { value: 'sunglasses', label: 'sunglasses' },
  // { value: 'automotive', label: 'automotive' },
  // { value: 'motorcycle', label: 'motorcycle' },
  // { value: 'lighting', label: 'lighting' },
]

// Product
interface TIdProduct {
  id: number
}

export interface TProduct extends TIdProduct {
  title: string
  price: number
  discountPercentage: number
  description: string
  thumbnail: string
  images?: string[]
  category: string
  slug: string
  condition: string
  refund: string
  weight: number
  brand: string
  availability: string
  rating: number
  reviews: number
  stock: number
}

export interface ImageProps {
  src: string
  alt: string
}

export interface InfoProps {
  title: string
  description: string
  reviews: number
  rating: number
  condition: string
  refund: string
  weight: number
  brand: string
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
