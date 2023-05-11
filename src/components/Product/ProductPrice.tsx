import { CustomButton, CustomCard, Price } from '@components'

export const ProductPrice = ({ price }: any) => {
  return (
    <CustomCard
      className="rounded-1 mb-4"
      classHeader="d-none"
      classFooter="d-none"
      classTitle="text-green-700 bg-teal-100 d-inline-block text-xs"
      title="FREE SHIPPING"
      hr={true}
      links={[
        {
          to: '/orders',
          label: 'Buy Now',
          classLink: 'btn btn-success d-flex justify-content-center text-light ',
        },
      ]}
    >
      <Price className="text-600" price={price} />
      <div className="d-flex align-items-center gap-3 pt-3 pb-4">
        <span>Amount</span>
        <span className="fw-semibold border rounded-1 px-4 py-1">1</span>
      </div>
      <div className="d-grid">
        <CustomButton className="btn border-success text-green-500 my-3">Add to Cart</CustomButton>
      </div>
    </CustomCard>
  )
}
