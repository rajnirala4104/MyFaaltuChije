import { Outlet } from "react-router"
import { Fragment } from "react"

const Root:React.FC = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default Root;
