import {Route, Redirect} from "react-router-dom"
import {Children, useContext} from "react"
import Auth from "./Auth"

const PrivateRoute = ({Children, ...rest}) => {

    let {user} = useContext(Auth)

    return <Route {...rest}>{!user? <Redirect to ="/login"/> : Children} </Route>
}

export default PrivateRoute
