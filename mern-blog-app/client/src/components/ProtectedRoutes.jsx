import React from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ProtectedRoutes = ({ props }) => {
    const token = cookies.get("Token")
            if (token) {
                return <Outlet {...props} />
            } else {
                return (
                    <Navigate to="/"/>
                    )}
}

export default ProtectedRoutes