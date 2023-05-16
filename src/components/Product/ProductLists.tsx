import { CustomCard, Price } from '@components'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { useApp } from '@context'
import { TProduct } from '@types'

export const ProductList = () => {
  const { products } = useApp()

  // console.log(products)

  return (
    <>
      {products.map((product: TProduct) => (
        <Col md={3} lg={2} key={product.id}>
          <CustomCard
            className="rounded-1 mb-4 border-0"
            classImg="object-fit-contain ratio-1 p-2 rounded-4"
            classText="text-900 bg-teal-100 d-inline-block text-xxs"
            classHeader="d-none"
            classTitle="d-none"
            classFooter="d-none"
            classBody="pt-0 px-2"
            src={product.images[0]}
            alt={product.title}
            text="FREE SHIPPING"
          >
            <Link
              to={`/product/${product.slug}`}
              className="text-900 text-underline-hover text-clamp text-xs pt-1 cursor-pointer"
            >
              {product.description}
            </Link>
            <div className="pt-2 text-600">
              <Price className="text-xs" classPrice="fs-6" price={product.price} />
            </div>
          </CustomCard>
        </Col>
      ))}
    </>
  )
}
