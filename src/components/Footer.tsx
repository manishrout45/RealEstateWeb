import React from 'react';
import { Building2, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                FutureEstate
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Revolutionizing the way you find and purchase your dream home with cutting-edge technology
              and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Properties', 'About Us', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Future Street</li>
              <li>Los Angeles, CA 90001</li>
              <li>contact@futureestate.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
                { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
                { icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-teal-800 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} FutureEstate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
