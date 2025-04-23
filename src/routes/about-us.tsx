import Container from "@/components/container"

const AboutUs = () => {
    return (
        <div className="flex-col w-full pb-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                        About <span className="text-indigo-600">CareerSquad</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We are a passionate team of seven innovators from Texas A&M University - Corpus Christi, dedicated to revolutionizing interview preparation with AI-driven insights.
                    </p>
                </div>

                {/* Project Overview */}
                <div className="mt-12 bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Smart Hire AI - Your Interview Companion
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Smart Hire AI is an advanced AI-powered platform designed to help job seekers enhance their interview skills. By leveraging AI-generated questions, real-time feedback, and text-to-speech analysis, we make interview preparation smarter and more efficient.
                    </p>
                </div>

                {/* Team Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
                        Meet the Team
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
                        The brilliant minds behind Smart Hire AI.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {[
                            { name: "Viswa Datta Gudapati", role: "Project Manager" },
                            { name: "Buddaraju Harshavardhanraju", role: "Project Technical Manager" },
                            { name: "Praneeth Gunturu", role: "Project Quality Assurance Manager" },
                            { name: "Rajyalakshmi Yarlagadda", role: "Project Configuration Manager" },
                            { name: "Surya Teja Merugu ", role: "Project Requirements Manager" },
                            { name: "Yaso Deepika Morampudi", role: "Project Design Manager" },
                            { name: "Saketh Reddy banda", role: "Project Test Manager" }
                        ].map((member, index) => (
                            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="mt-16 bg-indigo-100 dark:bg-indigo-900 p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Vision</h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        To empower job seekers with AI-driven tools that enhance their interview performance and career success.
                    </p>

                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-8">Our Mission</h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        CareerSquad aims to bridge the gap between talent and opportunity by providing an innovative, AI-powered platform for interview preparation.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs