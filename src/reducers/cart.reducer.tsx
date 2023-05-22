import { Action, AddToCartAction, DeleteCartAction, SetCartAction, SetCartPriceAction, State } from '@types'

export const cartInitialState: State = {
  cart: [],
  cartPrice: 0,
}

export const cartReducer = (state: State, action: Action): State => {
  const actions = {
    ADD_TO_CART: () => {
      const { payload } = action as AddToCartAction
      const newProductIndex = state.cart.findIndex((item) => item.id === payload.id)

      if (newProductIndex >= 0) {
        const newCart = [...state.cart]
        const newQuantity = (newCart[newProductIndex].quantity += 1)
        const newPrice = newCart[newProductIndex].price * newQuantity

        return { ...state, cart: newCart, cartPrice: state.cartPrice + newPrice / newQuantity }
      }
      
      const updatedCart = [...state.cart, { ...payload, quantity: 1 }]
      const newPrice = state.cartPrice + payload.price
      return { ...state, cart: updatedCart, cartPrice: newPrice }
    },

    DELETE_CART: () => {
      const { payload } = action as DeleteCartAction
      const filter = state.cart.filter((item) => item.id !== payload)
      const newCartPrice = filter.reduce(
        (total, currenProduct) => total + currenProduct.price * currenProduct.quantity,
        0
      )
      return { ...state, cart: filter, cartPrice: newCartPrice }
    },

    SET_CART: () => {
      const { payload } = action as SetCartAction
      return { ...state, cart: payload }
    },

    SET_CART_PRICE: () => {
      const { payload } = action as SetCartPriceAction
      return { ...state, cartPrice: payload }
    },
  }
  return actions[action.type]?.() || state
}
