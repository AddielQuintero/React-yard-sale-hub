import { CustomCard } from '@components'
import visa from '@assets/c-visa.svg'
import amex from '@assets/c-amex.svg'
import masterCard from '@assets/c-master.svg'
import paypal from '@assets/c-paypal.svg'
import discover from '@assets/discover-logo.svg'
import dinersClub from '@assets/c-dinersClub.svg'

export const PaymentMethods = () => {
  return (
    <CustomCard classHeader="d-none" classFooter="d-none" title="Payment methods">
      <span className="text-500 small">Credit and debit cards or via PayPal.</span>
      <div className="cards__types pt-2">
        <div className="cards__types-container">
          <img src={visa} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={paypal} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={masterCard} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={amex} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={dinersClub} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={discover} alt="" />
        </div>
      </div>
    </CustomCard>
  )
}
