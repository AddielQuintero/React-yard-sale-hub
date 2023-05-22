import { AppChildrenProps, DefaultContext, TAppContext } from '@types'
import { CartService, ProductService } from '@services'
import { createContext, useContext } from 'react'

const AppContext = createContext<TAppContext>(DefaultContext)

const AppProvider = ({ children }: AppChildrenProps) => {
  const { products, productFiltered, filters, setFilters } = ProductService()
  const { cart, cartItemsCount, cartPrice, taxes, totalPrice, addCart, deleteCart } = CartService()

  const app = {
    products,
    productFiltered,
    filters,
    cart,
    cartItemsCount,
    cartPrice,
    taxes,
    totalPrice,
    setFilters,
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
