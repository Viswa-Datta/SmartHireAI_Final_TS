

import Leaderboard from "./pages/Leaderboard";
import Analytics from "./pages/Analytics";
import CertificateViewer from "./pages/CertificateViewer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PublicLayout } from "@/layouts/public-layouts"
import { MainLayout } from "@/layouts/main-layout"
import ProtectedRoute from "@/layouts/protected-routes"
import AuthenticationLayout from "@/layouts/auth-layout"

import HomePage from "@/routes/home"
import SignInPage from "@/routes/sign-in"
import SignUpPage from "@/routes/sign-up"


import { Dashboard } from "@/routes/dashboard"
import { Generate } from "@/components/generate"
import { CreateEditPage } from "@/routes/create-edit-page"
import { MockLoadPage } from "@/routes/mock-load-page"
import { MockInterviewPage } from "@/routes/mock-interview-page"
import { Feedback } from "./routes/feedback"
import ContactUs from "@/routes/contact-us"
import AboutUs from "@/routes/about-us"


const App = () => {
    return (
        <Router>
            <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/certificate" element={<CertificateViewer />} />

                {/* Public routes */}
                <Route element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                </ Route>

                <Route element={<PublicLayout />}>
                    <Route path="/contact" element={<ContactUs />} />
                </Route>

                <Route element={<PublicLayout />}>
                    <Route path="/about" element={<AboutUs />} />
                </Route>

                {/* Authentication layout */}
                <Route element={<AuthenticationLayout />}>
                    <Route path="/signin/*" element={<SignInPage />} />
                    <Route path="/signup/*" element={<SignUpPage />} />
                </ Route>

                {/* protected routes */}
                <Route 
                    element={<ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                }>
                    {/* add all the protect routes */}
                    <Route element={<Generate />} path="/generate">
                        <Route index element={<Dashboard />} />
                        <Route path=":interviewId" element={<CreateEditPage />} />
                        <Route path="interview/:interviewId" element={<MockLoadPage />} />
                        <Route
                            path="interview/:interviewId/start"
                            element={<MockInterviewPage />}
                        />
                        <Route path="feedback/:interviewId" element={<Feedback />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
