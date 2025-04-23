import Container from "@/components/container"
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button"
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="relative w-full pb-24">
            {/* Background Image with Low Opacity */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ 
                    backgroundImage: "url('/assets/img/backg.jpg')",
                    backgroundAttachment: "fixed"
                }}
            />
            <div className="relative z-10">
                <Container>
                    <div className="my-10 text-center md:text-left">
                        <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                                AI-Powered Interviews
                            </span>
                            <br />
                            <span className="text-gray-600 dark:text-gray-400">Redefining How You Prepare</span>
                        </h2>

                        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
                            Elevate your interview skills with AI-driven insights, real-time feedback, and
                            personalized coaching. Prepare smarter, practice effectively, and land your dream job.
                        </p>

                    </div>

                    <div className="relative flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-auto md:h-[500px]">
                        {/* Text Content */}
                        <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Interviews Copilot&copy;
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                Elevate your interview preparation with AI-driven insights and real-time practice.
                            </p>
                            <Link to='/generate'>
                                <Button className="w-40 bg-blue-500 text-white hover:bg-blue-700">
                                    Get Started
                                </Button>
                            </Link>

                        </div>
                        {/* Image */}
                        <div className="w-full md:w-1/2 h-80 md:h-full">
                            <img src="/assets/img/homeimg.png" alt="" className="w-full h-full object-contain" />
                        </div>
                    </div>

                
                    <div className="h-16"></div>

                    <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between gap-12 px-6 py-12 md:px-16 md:py-20 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg">
                        <div className="text-center md:text-left max-w-md">
                            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                                Elevate Your Interview Game
                            </h3>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                                AI-powered simulations, real-time feedback, and personalized coaching designed to help you succeed in any job interview.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div>
                                <h4 className="text-3xl font-bold text-indigo-600">10k+</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400">Custom AI Interviews</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-blue-500">95%</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400">User Satisfaction Rate</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-green-500">30+</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400">Interview Categories</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-red-500">Real-Time</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400">AI Feedback & Insights</p>
                            </div>
                        </div>
                    </div>

                    
                </Container> 

                {/* marquee section */}
                <div className=" w-full my-12">
                    <Marquee pauseOnHover>
                        <MarqueImg img="/assets/img/logo/firebase.png" />
                        <MarqueImg img="/assets/img/logo/canvas.png" />
                        <MarqueImg img="/assets/img/logo/tailwindcss.png" />
                        <MarqueImg img="/assets/img/logo/ReactLogo.png" />
                        <MarqueImg img="/assets/img/logo/firebase.png" />
                        <MarqueImg img="/assets/img/logo/Gemini.png" />
                        <MarqueImg img="/assets/img/logo/clerk.png" />
                    </Marquee>
                </div>

                <Container className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Image with Overlay */}
                        <div className="relative w-full h-96 rounded-xl overflow-hidden">
                            <img src="/assets/img/off.jpeg" alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h2 className="text-white text-2xl font-semibold text-center px-4">
                                    Unlock Your Potential with AI-Powered Coaching
                                </h2>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <p className="text-gray-700 text-lg">
                                Transform your preparation, gain confidence, and maximize your chances of success.
                            </p>
                            <Link to="/generate" className="w-full flex justify-center md:justify-start">
                                <Button className="w-40 bg-blue-500 text-white hover:bg-blue-700">Generate </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
                
            </div>
        </div>
    )
}

export default HomePage



///////////////////////////////////////////////////////////////////////////////////


