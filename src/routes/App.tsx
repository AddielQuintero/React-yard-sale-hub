import { HashRouter, Routes, Route } from 'react-router-dom'
import { DailyDeals, CustomerService, GiftCards, Home, Login, NotFound, Orders, Product, Profile, ResetPassword, SignUp, History,} from '@pages'
import { NavigateProps } from '@types'
import { NavBar } from '@components'
import { AppProvider } from '@context'

const navigation: NavigateProps = [
  { name: 'All', to: '/', private: false },
  { name: 'Daily deals', to: '/dailyDeals', private: false },
  { name: 'Customer service', to: '/customerService', private: false },
  { name: 'Gift cards', to: '/giftCards', private: false },
  { name: 'History', to: '/history', private: false },
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
            <Route path="/dailyDeals" element={<DailyDeals />} />          
            <Route path="/customerService" element={<CustomerService />} />
            <Route path="/giftCards" element={<GiftCards />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
        </AppProvider>
      </HashRouter>
    </>
  )
}
