import { HashRouter, Routes, Route } from 'react-router-dom'
import { Clothes, Electronics, Furnitures, Home, Login, NotFound, Orders, Other, Profile, ResetPassword, SignUp, Toys } from './pages'
import { ClothesDetail } from './pages/Clothes/[id]'
import { OrdersDetail } from './pages/Orders/[id]'
import { NavigateProps } from './types'
import { NavBar } from './components'

const navigation: NavigateProps = [
  { name: 'All', to: '/', private: false },
  { name: 'Clothes', to: '/clothes', private: false },
  { name: 'Electronics', to: '/electronics', private: false },
  { name: 'Furnitures', to: '/furnitures', private: false },
  { name: 'Toys', to: '/toys', private: false },
  { name: 'Other', to: '/other', private: false },
]

export default function App() {
  return (
    <>
      <HashRouter>
        <NavBar navigation={navigation} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:slug" element={<OrdersDetail />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/clothes/:slug" element={<ClothesDetail />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/furnitures" element={<Furnitures />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/other" element={<Other />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}
