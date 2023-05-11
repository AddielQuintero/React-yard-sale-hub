import { CustomCard } from '@components'
import visa from '@assets/c-visa.svg'
import amex from '@assets/c-amex.svg'
import masterc from '@assets/c-masterc.svg'
import paypal from '@assets/c-paypal.svg'
import discover from '@assets/discover-logo.svg'
import dinersclub from '@assets/c-dinersclub.svg'

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
          <img src={masterc} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={amex} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={dinersclub} alt="" />
        </div>
        <div className="cards__types-container">
          <img src={discover} alt="" />
        </div>
      </div>
    </CustomCard>
  )
}
