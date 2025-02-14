import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            {/* Exact gradient matching Subscribe button */}
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Sreeja
            </h3>
            <p className="text-gray-400">
              Full-Stack Developer skilled in Java, Web Development, and JavaScript, specializing in scalable solutions, API integrations, and modern UI/UX. Proficient in SQL, MongoDB, Docker, and AI/ML.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sreeja. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://x.com/Sreejak2004" className="text-gray-400 hover:text-white">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/sreejakrishnamoorthy" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sreejakrishnamoorthy/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sreejakrishnamoorthy" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
