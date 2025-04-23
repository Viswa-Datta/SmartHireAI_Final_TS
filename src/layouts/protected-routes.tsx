


import { useAuth } from "@clerk/clerk-react"
import LoaderPage from "@/routes/loader-page"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children} : {children : React.ReactNode}) => {

    const {isLoaded, isSignedIn} = useAuth()

    if(!isLoaded) {
        return <LoaderPage />
    }

    if(!isSignedIn) {
        return <Navigate to={"/signIn"} replace />
    }

    return children
}

export default ProtectedRoute
