import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-[#1e152a] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-4">SkillSphere</h2>
          <p className="text-sm leading-relaxed mb-6">
            Unlock your potential with SkillSphere – your gateway to expert-led courses across diverse fields. Start learning today and shape your future!
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="bg-white/10 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Resources */}
        <FooterLinks title="Resources" links={["Technology & Programming", "Creative Arts & Design", "Business & Entrepreneurship", "Personal Development", "Languages"]} />
        
        {/* Support */}
        <FooterLinks title="Support" links={["Help Center", "My Account", "Ticket Support", "Contact Us"]} />
        
        {/* Company */}
        <FooterLinks title="Company" links={["About Us", "Leadership", "Careers", "Articles & News", "Legal Notices"]} />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm">
        <p>&copy; {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};



export default Footer;