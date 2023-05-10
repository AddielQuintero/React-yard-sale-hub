import { Link } from 'react-router-dom'

const productData = [
  {
    id: 1,
    name: 'ARCTIC MX-4 (incluye espátula, 4 g) - Pasta térmica de alto rendimiento para todos los procesadores (CPU, GPU - PC, PS4, XBOX), conductividad térmica muy alta, larga duración, aplicación segura, no conductora',
    slug: 'ARCTIC-MX-4-(incluye espátula,-4-g)',
    price: 10.32,
    img: 'https://m.media-amazon.com/images/I/61fpmJ4k5aL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: 'Reloj inteligente KALINCO, rastreador de actividad física con monitor de frecuencia cardíaca, presión arterial y oxígeno en sangre, reloj inteligente con pantalla táctil de 1,4 pulgadas para mujeres y hombres, compatible con Android, iPhone e iOS',
    slug: 'Reloj-inteligente-KALINCO',
    price: 30.47,
    img: 'https://m.media-amazon.com/images/I/61zRr8F0u9L._AC_SL1500_.jpg',
  },
]

export const OrdersCart = (props: any) => {
  return (
    <div className={`order ${props.className}`}>
      <ul className="order__container">
        {productData.map((product) => (
          <li className="order__container-item" key={product.id}>
            <figure>
              <img src={product.img} alt="" />
            </figure>

            <div className=" d-flex flex-column justify-content-between">
              <Link
                to={`/orders/${product.slug}`}
                className="text-900 text-decoration-none"
                onClick={props.handleClose}
              >
                {product.name}
              </Link>
              <span className="fw-semibold">1x</span>
            </div>

            <div className=" d-flex flex-column justify-content-between align-items-end">
              <span className="cursor-pointer">
                <i className="bi bi-trash fs-5 "></i>
              </span>
              <span className="text-600">U$S {product.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
