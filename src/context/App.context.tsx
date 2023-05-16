import { AppChildrenProps, DefaultContext, TAppContext } from '@types'
import { CartService, ProductService } from '@services'
import { createContext, useContext } from 'react'

const AppContext = createContext<TAppContext>(DefaultContext)

const AppProvider = ({ children }: AppChildrenProps) => {
  const { products } = ProductService()
  const { cart, cartPrice, addCart, deleteCart, taxes, totalPrice } = CartService()

  const app = {
    products,
    cart,
    cartPrice,
    taxes,
    totalPrice,
    addCart,
    deleteCart,
  }

  //   console.log(products)

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}

const useApp = () => {
  const app = useContext(AppContext)
  return app
}

export { AppProvider, useApp }
