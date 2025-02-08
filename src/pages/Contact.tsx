import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-900 text-white">
      {/* Contact Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-teal-400">Get in Touch</h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
        Have any questions or inquiries? We're here to help! Reach out to us, and our team will assist you promptly.
      </p>

      {/* Contact Details Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-teal-500 rounded-lg shadow-lg bg-gray-800">
          <FaPhoneAlt className="text-teal-400 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-teal-400">Call Us</h3>
          <p className="text-gray-300">+123 456 7890</p>
        </div>
        <div className="p-6 border border-teal-500 rounded-lg shadow-lg bg-gray-800">
          <FaEnvelope className="text-teal-400 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-teal-400">Email Us</h3>
          <p className="text-gray-300">support@realestate.com</p>
        </div>
        <div className="p-6 border border-teal-500 rounded-lg shadow-lg bg-gray-800">
          <FaMapMarkerAlt className="text-teal-400 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-teal-400">Visit Us</h3>
          <p className="text-gray-300">123 Estate Street, New York, USA</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-3xl mx-auto p-8 border border-teal-500 rounded-lg shadow-md bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-teal-400 mb-6">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-teal-400 font-semibold">Name</label>
            <input type="text" className="w-full mt-1 p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-teal-500" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-teal-400 font-semibold">Email</label>
            <input type="email" className="w-full mt-1 p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-teal-500" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-teal-400 font-semibold">Message</label>
            <textarea className="w-full mt-1 p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-teal-500" rows={4} placeholder="Write your message here"></textarea>
          </div>
          <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition font-semibold">
            Send Message
          </button>
        </form>
      </div>

      {/* Business Hours Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-teal-400">Business Hours</h2>
        <p className="text-gray-300 mt-4">We are available to assist you during the following hours:</p>
        <ul className="mt-4 text-lg">
          <li className="text-gray-400">🕒 Monday - Friday: 9 AM - 6 PM</li>
          <li className="text-gray-400">🕒 Saturday: 10 AM - 4 PM</li>
          <li className="text-gray-400">🚫 Sunday: Closed</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-teal-400">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4 max-w-3xl mx-auto">
          <div className="p-4 border border-teal-500 rounded-lg bg-gray-800">
            <h3 className="text-lg font-semibold text-teal-400">How long does it take to get a response?</h3>
            <p className="text-gray-300 mt-2">We usually respond within 24 hours on business days.</p>
          </div>
          <div className="p-4 border border-teal-500 rounded-lg bg-gray-800">
            <h3 className="text-lg font-semibold text-teal-400">Do you offer in-person consultations?</h3>
            <p className="text-gray-300 mt-2">Yes! You can schedule an appointment at our office.</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-teal-400">Follow Us</h2>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-teal-400 text-3xl hover:text-teal-500 transition"><FaFacebook /></a>
          <a href="#" className="text-teal-400 text-3xl hover:text-teal-500 transition"><FaTwitter /></a>
          <a href="#" className="text-teal-400 text-3xl hover:text-teal-500 transition"><FaLinkedin /></a>
          <a href="#" className="text-teal-400 text-3xl hover:text-teal-500 transition"><FaInstagram /></a>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-teal-400 text-center">Find Us on the Map</h2>
        <div className="mt-4 w-full h-64 bg-gray-700 flex items-center justify-center rounded-lg">
          <p className="text-gray-300">Google Map Embed Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
