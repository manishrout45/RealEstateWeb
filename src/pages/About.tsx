import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/30 via-gray-900/70 to-gray-900"></div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-teal-400 z-10"
        >
          About Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mt-4 z-10"
        >
          Connecting buyers with dream properties through seamless, trustworthy, and transparent experiences.
        </motion.p>
      </div>

      {/* Vision & Values */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-teal-500/40">
          <h2 className="text-3xl font-bold text-teal-400">Our Vision</h2>
          <p className="text-gray-300 mt-4">
          At FutureEstate, our vision is to redefine the real estate experience through innovation, transparency, and customer-centric solutions.

We believe in:<br></br>
✅ Making property transactions seamless through advanced technology<br></br>
✅ Providing secure and trustworthy deals for buyers, sellers, and investors<br></br>
✅ Building communities by connecting people with homes that match their aspirations<br></br>
✅ Sustainable development through eco-friendly and smart infrastructure solutions<br></br>

Our goal is to create a future where buying, selling, and investing in properties is effortless, transparent, and rewarding.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-teal-500/40">
          <h2 className="text-3xl font-bold text-teal-400">Our Values</h2>
          <p className="text-gray-300 mt-4">
          💠 Integrity & Transparency
We uphold honesty and fairness in every transaction, ensuring that our clients make informed and confident decisions.<br></br>
💠 Customer First Approach
Our clients are at the heart of everything we do. We listen, understand, and tailor solutions to meet their specific needs.<br></br>
💠 Innovation & Excellence
We leverage cutting-edge technology and market insights to simplify property transactions and enhance customer experience<br></br>
💠 Sustainability & Responsibility
We support environmentally-friendly real estate solutions, promoting energy-efficient and sustainable housing developments.<br></br>
💠 Collaboration & Growth
We build lasting relationships with our clients, partners, and stakeholders, fostering a culture of trust and growth in the real estate industry.<br></br>
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-950">
        <h2 className="text-center text-4xl font-bold text-teal-400">Why Choose Us?</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {[
            { title: "Expert Agents", desc: "Our team consists of experienced professionals.", img: "https://via.placeholder.com/100" },
            { title: "Wide Listings", desc: "An extensive database of properties.", img: "https://via.placeholder.com/100" },
            { title: "24/7 Support", desc: "Round-the-clock assistance available.", img: "https://via.placeholder.com/100" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              className="bg-gray-800 p-6 rounded-2xl shadow-md text-center w-64"
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 mx-auto rounded-full" />
              <h3 className="text-xl font-semibold text-teal-400 mt-4">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-bold text-teal-400">Meet Our Team</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {[
            { name: "John Doe", role: "CEO & Founder", img: "https://via.placeholder.com/150" },
            { name: "Jane Smith", role: "Head of Operations", img: "https://via.placeholder.com/150" }
          ].map((member, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -5 }} 
              className="bg-gray-800 p-6 rounded-2xl shadow-md text-center w-60"
            >
              <img src={member.img} alt={member.name} className="rounded-full mx-auto w-32 h-32 border-4 border-teal-400" />
              <h3 className="text-lg font-semibold text-teal-400 mt-4">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-950">
        <h2 className="text-center text-4xl font-bold text-teal-400">What Our Clients Say</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {[
            { text: "FutureEstate helped me find my dream home effortlessly!", name: "Emily R." },
            { text: "A trustworthy and professional real estate platform!", name: "Michael T." }
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-800 p-6 rounded-2xl shadow-md text-center max-w-md"
            >
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              <h3 className="text-lg font-semibold text-teal-400 mt-4">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
