import { useState } from 'react'
import { TProduct } from '@types'

export const CartService = () => {
  const [cart, setCart] = useState<TProduct[]>([])
  const [cartPrice, setCartPrice] = useState<number>(0)
  const taxes = +(cartPrice * 0.07).toFixed(2)
  const totalPrice = +(cartPrice + taxes).toFixed(2)

  const addCart = (newProduct: TProduct) => {
    setCart((prevCart) => [...prevCart, newProduct])
    setCartPrice((prevTotal) => +(prevTotal + newProduct.price).toFixed(2))
  }

  const deleteCart = (productId: number) => {
    const filter = cart.filter((product) => product.id !== productId)
    setCart(filter)

    const newCartPrice = filter.reduce((total, currentProduct) => total + currentProduct.price, 0)
    setCartPrice(+newCartPrice.toFixed(2))
  }

  return { cart, cartPrice, taxes, totalPrice, addCart, deleteCart }
}
