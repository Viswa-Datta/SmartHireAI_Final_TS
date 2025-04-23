import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./container";
import { MainRoutes } from "@/lib/helper";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollUp}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  ) : null;
};

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-12 border-t border-gray-700 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base items-start">
          
          {/* Quick Links */}
          <div className="w-full">
            <h3 className="font-semibold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <li key={route.href}>
                  <Link
                    to={route.href}
                    className="hover:underline text-gray-400 hover:text-white transition duration-300"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="w-full flex flex-col items-center text-center">
            <h3 className="font-semibold text-lg text-white mb-4">About Us</h3>
            <p className="text-gray-400 max-w-md">
              We are a passionate team of seven innovators from Texas A&M University - Corpus Christi,
              dedicated to revolutionizing interview preparation with AI-driven insights.
            </p>
          </div>

          {/* Contact Us */}
          <div className="w-full text-right flex flex-col items-end">
            <h3 className="font-semibold text-lg text-white mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">CareerSquad, Corpus Christi, TX 78412</p>
            <div className="flex items-center gap-2 mb-1">
              <Mail size={20} />
              <span className="text-gray-400">support@smarthireai.com</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Phone size={20} />
              <span className="text-gray-400">+1 (000) 000-0000</span>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
              <a href="https://twitter.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
              <a href="https://instagram.com" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Smart Hire AI | CareerSquad. All rights reserved.
        </div>
      </Container>

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
};

export default Footer;
