import { useState } from 'react'
import { TCart, TProduct } from '@types'

export const CartService = () => {
  const [cart, setCart] = useState<TCart[]>([])
  const [cartPrice, setCartPrice] = useState<number>(0)
  
  const taxes = +(cartPrice * 0.07).toFixed(2)
  const totalPrice = +(cartPrice + taxes).toFixed(2)
  const countCartItems = cart.reduce((total, currentProduct) => total + currentProduct.quantity, 0)
  
  // console.log(cart)
  // console.log('this product already exist')
  // console.log(`newQuantity ${newQuantity}`)
  // console.log(`newPrice ${newPrice}`)
  // console.log(`cartPrice inside ${cartPrice}`)
  // console.log(`cartPrice outside ${cartPrice}`)

  const addCart = (newProduct: TProduct) => {
    const newProductIndex = cart.findIndex((item) => item.id === newProduct.id)

    if (newProductIndex >= 0) {
      const newCart = structuredClone(cart)
      const newQuantity = (newCart[newProductIndex].quantity += 1)
      const newPrice = newCart[newProductIndex].price * newQuantity

      setCartPrice((prevTotal) => prevTotal + newPrice / newQuantity)

      return setCart(newCart)
    }

    // setCart([...cart, { ...newProduct, quantity: 1 }])
    setCart((prevCart) => [...prevCart, { ...newProduct, quantity: 1 }])
    setCartPrice((prevTotal) => +(prevTotal + newProduct.price).toFixed(2))
  }

  const deleteCart = (productId: number) => {
    const filter = cart.filter((product) => product.id !== productId)
    setCart(filter)

    const newCartPrice = filter.reduce(
      (total, currentProduct) => total + currentProduct.price * currentProduct.quantity,
      0
    )
    setCartPrice(+newCartPrice.toFixed(2))
  }

  return { cart, countCartItems, cartPrice, taxes, totalPrice, addCart, deleteCart }
}
