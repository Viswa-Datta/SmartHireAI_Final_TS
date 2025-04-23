import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"
import Header from "@/components/header"
import AuthHandler from "@/handlers/auth-handler"

export const PublicLayout = () => {
    return (
        <div className="w-full">
            <AuthHandler />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}