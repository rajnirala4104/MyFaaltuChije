import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

export const Root:React.FC = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

