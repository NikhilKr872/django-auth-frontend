import { Route } from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
    console.log("PRivate route")
  return (
    <Route {...rest}>{children}</Route>
    )
}

export default PrivateRoute