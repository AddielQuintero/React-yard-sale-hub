import { useEffect, useState } from 'react'
import axios from 'axios'
import { DefaultFilters, TFilters, TProduct } from '@types'

// const BASE_URL = 'http://localhost:3000/dataStore'
const BASE_URL = 'https://json-server-router-dom.herokuapp.com/dataStore'

export const ProductService = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [filters, setFilters] = useState<TFilters>(DefaultFilters)
  // console.log(filters)

  useEffect(() => {
    axios
      .get(` ${BASE_URL}?_page=1&_limit=20`)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
    // console.log('get api')
  }, [setProducts])

  const productFilters = (products: TProduct[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'All' || filters.category === product.category)
      )
    })
  }

  const productFiltered = productFilters(products)

  return { products, productFiltered, filters, setFilters }
}
