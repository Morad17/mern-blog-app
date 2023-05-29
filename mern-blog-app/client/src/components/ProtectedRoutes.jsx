import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ProtectedRoutes = ({ element: Element, ...rest}) => {
    const token = cookies.get("Token")
            if (token) {
                return <Outlet {...props} />
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
                    )}
}

export default ProtectedRoutes