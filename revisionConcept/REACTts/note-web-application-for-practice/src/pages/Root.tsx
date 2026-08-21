import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { Navbar } from "../components"

export const Root:React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  )
}

