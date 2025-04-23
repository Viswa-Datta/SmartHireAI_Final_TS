import Container from "@/components/container";

const ContactUs = () => {
    return (
        <div className="flex-col w-full pb-24">
            <Container>
                {/* Page Header */}
                <div className="text-center py-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                        Get in Touch With Us
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Have questions, feedback, or need assistance? We're here to help!
                    </p>
                </div>

                {/* Team Members Section */}
                

                {/* Contact Form Section */}
                <div className="mt-16 bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">Send Us a Message</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
                        Fill out the form below, and we’ll get back to you as soon as possible.
                    </p>
                    <form className="mt-6 space-y-6 max-w-2xl mx-auto">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-4 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full p-4 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows={4}
                            className="w-full p-4 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700"
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default ContactUs;