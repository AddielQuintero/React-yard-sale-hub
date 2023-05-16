import { useEffect, useState } from 'react'
import axios from 'axios'
import { TProduct } from '@types'

// const BASE_URL = 'http://localhost:3000/dataStore'
const BASE_URL = 'https://json-server-router-dom.herokuapp.com/dataStore'

export const ProductService = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  // console.log(products)

  useEffect(() => {
    axios
      .get(` ${BASE_URL}?_page=1&_limit=8`)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
    console.log('get into useEffect')
  }, [setProducts])

  return { products }
}
