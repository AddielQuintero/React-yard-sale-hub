import { CustomCard } from '@components'
import visa from '@assets/c-visa.svg'
import amex from '@assets/c-amex.svg'
import masterCard from '@assets/c-master.svg'
import paypal from '@assets/c-paypal.svg'
import discover from '@assets/discover-logo.svg'

export const ProductPayment = () => {
  return (
    <CustomCard
      className="border-0 shadow"
      classHeader="d-none"
      classFooter="d-none"
      title="Payment methods"
    >
      <span className="text-500 small">Credit and debit cards or via PayPal.</span>
      <div className="card__payment pt-2">
        <div className="card__content">
          <img src={visa} alt="Visa" />
        </div>
        <div className="card__content">
          <img src={paypal} alt="Paypal" />
        </div>
        <div className="card__content">
          <img src={masterCard} alt="Master Card" />
        </div>
        <div className="card__content">
          <img src={amex} alt="Amex" />
        </div>
        <div className="card__content">
          <img src={discover} alt="Discover" />
        </div>
      </div>
    </CustomCard>
  )
}
