import { TProduct } from '@types'
import { useState } from 'react'

export const CartService = () => {
  const [cart, setCart] = useState<TProduct[]>([])
  const [cartPrice, setTotalPrice] = useState<number>(0)

  const addCart = (newProduct: TProduct) => {
    setCart((prevCart) => [...prevCart, newProduct])
    setTotalPrice((prevTotal) => +((prevTotal + newProduct.price).toFixed(2)))
  }

  // console.log(`cartService: ${totalPrice}`)

  return { cart, cartPrice, addCart }
}
