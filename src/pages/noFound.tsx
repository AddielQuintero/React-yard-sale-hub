import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <p className="">404</p>
          <h1 className="mt-4 ">Page not found</h1>
          <p className="mt-6 ">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-5 d-flex align-items-center justify-content-center gap-5">
            <NavLink to="/" className="btn border-none text-light bg-green-300 py-3 d-flex align-items-center px-3.5">
              Go back home
            </NavLink>

            <NavLink to="#" className="btn d-flex align-items-center px-3.5 py-3">
              Contact support <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  )
}
