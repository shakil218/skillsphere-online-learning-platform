"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e152a] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand + Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">SkillSphere</h2>
          <p className="text-sm mt-2">
            Contact: support@skillsphere.com
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-purple-600 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Policies */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-8 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;