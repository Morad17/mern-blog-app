import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ProtectedRoutes = ({ element: Element, ...rest}) => {
  return (
    // takes in other routes assigned from app.js and returns if condition is met
    <Route
        {...rest}
        render={(props) => {
            const token = cookies.get("Token")

            if (token) {
                return <Element {...props} />
            } else {
                return (
                    <Navigate
                        to={{
                            pathname: "/",
                            state: {
                            from: props.location
                                },
                            }}
                    />
                    )
                }
        }}
    />
  )
}

export default ProtectedRoutes