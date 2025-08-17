import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className=" text-gray-300  border-t border-zinc-400 py-8 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand / Name */}
        <motion.h2
          className="text-xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Kousik's Portfolio
        </motion.h2>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-primary transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <motion.a
            href="https://github.com/kousik-devop"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="hover:text-primary transition" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kousik-maiti/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="hover:text-primary transition" />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter className="hover:text-primary transition" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
