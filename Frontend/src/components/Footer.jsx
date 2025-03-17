import React from "react";
import { FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">Job<span className="text-[#f83002]">Portal</span></h2>
            <p className="mt-2 text-sm">Find your dream job with us. Connecting talent with opportunity.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-[#f83002]">Home</a></li>
              <li><a href="/jobs" className="hover:text-[#f83002]">Jobs</a></li>
              <li><a href="/companies" className="hover:text-[#f83002]">Companies</a></li>
              <li><a href="/contact" className="hover:text-[#f83002]">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <a href="https://github.com/tech-in-tech" target="_blank"  className="p-2 bg-gray-800 hover:bg-[#f83002] rounded-full"><FaGithub size={18} /></a>
              <a href="https://x.com/Anubhav6122004" target="_blank"  className="p-2 bg-gray-800 hover:bg-[#f83002] rounded-full"><FaTwitter size={18} /></a>
              <a href="https://www.linkedin.com/in/anubhav-sharma-1772b4215/" target="_blank"  className="p-2 bg-gray-800 hover:bg-[#f83002] rounded-full"><FaLinkedinIn size={18} /></a>
              <a href="https://www.youtube.com/" target="_blank"  className="p-2 bg-gray-800 hover:bg-[#f83002] rounded-full"><FaYoutube size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
