import { AppChildrenProps, DefaultContext, TAppContext } from '@types'
import { CartService, ProductService } from '@services'
import { createContext, useContext } from 'react'

const AppContext = createContext<TAppContext>(DefaultContext)

const AppProvider = ({ children }: AppChildrenProps) => {
  const { products } = ProductService()
  const { cart, cartPrice, addCart } = CartService()

  const app = {
    products,
    cart,
    cartPrice,
    addCart,
  }

  //   console.log(products)

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}

const useApp = () => {
  const app = useContext(AppContext)
  return app
}

export { AppProvider, useApp }
