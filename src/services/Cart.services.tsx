import { TProduct } from '@types'
import { useState } from 'react'

export const CartService = () => {
  const [cart, setCart] = useState<TProduct[]>([])
  const [cartPrice, setCartPrice] = useState<number>(0)

  const addCart = (newProduct: TProduct) => {
    setCart((prevCart) => [...prevCart, newProduct])
    setCartPrice((prevTotal) => +((prevTotal + newProduct.price).toFixed(2)))
  }

  // console.log(`cartService: ${totalPrice}`)

  return { cart, cartPrice, addCart }
}
