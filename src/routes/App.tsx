import { HashRouter, Routes, Route } from 'react-router-dom'
import { Clothes, Electronics, Furniture, Home, Login, NotFound, Orders, Product, Profile, ResetPassword, SignUp, Toys,} from '@pages'
import { NavigateProps } from '@types'
import { NavBar } from '@components'
import { AppProvider } from '@context'

const navigation: NavigateProps = [
  { name: 'All', to: '/', private: false },
  { name: 'Clothes', to: '/clothes', private: false },
  { name: 'Electronics', to: '/electronics', private: false },
  { name: 'Furniture', to: '/furniture', private: false },
  { name: 'Toys', to: '/toys', private: false },
]

export const App = () => {
  return (
    <>
      <HashRouter>
        <AppProvider>
          <NavBar navigation={navigation} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/clothes" element={<Clothes />} />          
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
        </AppProvider>
      </HashRouter>
    </>
  )
}
