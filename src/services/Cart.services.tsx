import { useEffect, useReducer } from 'react'
import { TProduct } from '@types'
import { cartReducer, cartInitialState } from '@reducers'

export const CartService = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const taxes = +(state.cartPrice * 0.07).toFixed(2)
  const totalPrice = +(state.cartPrice + taxes).toFixed(2)
  const cartItemsCount = state.cart.reduce((total, currentProduct) => total + currentProduct.quantity, 0)

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      dispatch({ type: 'SET_CART', payload: parsedCart })

      let totalPrice = 0
      for (const product of parsedCart) {
        totalPrice += product.price * product.quantity
      }
      // setCartPrice(totalPrice)
      dispatch({ type: 'SET_CART_PRICE', payload: totalPrice })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  const addCart = (newProduct: TProduct) => {
    dispatch({ type: 'ADD_TO_CART', payload: newProduct })
  }

  const deleteCart = (id: number) => {
    dispatch({ type: 'DELETE_CART', payload: id })
  }
  return {
    cart: state.cart,
    cartPrice: state.cartPrice,
    cartItemsCount,
    totalPrice,
    taxes,
    addCart,
    deleteCart,
  }
}


