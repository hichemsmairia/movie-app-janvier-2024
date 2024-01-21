import { Navigate } from 'react-router-dom'
const token = localStorage.getItem('token')

function ProtectedRoutes({ children }) {
    if (!token) {
        return Navigate({ to: "/login", replace: true })
    }
    return children
}

export default ProtectedRoutes


