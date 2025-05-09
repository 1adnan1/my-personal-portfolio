import {
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaEnvelope,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-[#0f172a] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm mb-6 font-medium">
            Designed & Developed by <span className="font-bold">Ahmad Lasani</span>
          </p>
  
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/ahmad-lasani-2868b8262"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/adnannn.me/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/ad545454nan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com/1adnan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:ahmadlasani54@gmail.com"
              className="hover:text-green-400 transition"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
  
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ahmad Lasani. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  