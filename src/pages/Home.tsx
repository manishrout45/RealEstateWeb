import React, { useState } from 'react';
import { ArrowRight, Building, Home as HomeIcon, MapPin, Star, X } from 'lucide-react';

const Home = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      description: 'A stunning luxury villa located in the heart of Beverly Hills with breathtaking views.',
      features: {
        bedrooms: 5,
        bathrooms: 4,
        area: '4,500 sq ft',
      },
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: 'New York, NY',
      price: '$1,750,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      description: 'A sleek and modern apartment in the heart of New York City with top-notch amenities.',
      features: {
        bedrooms: 3,
        bathrooms: 2,
        area: '2,000 sq ft',
      },
    },
    {
      id: 3,
      title: 'Modern New Apartment',
      location: 'New York, NY',
      price: '$1,750,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      description: 'A sleek and modern apartment in the heart of New York City with top-notch amenities.',
      features: {
        bedrooms: 3,
        bathrooms: 2,
        area: '3,000 sq ft',
      },
    },
  ];
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-green-600/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Find Your <span className="block text-green-400">Perfect Home</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              Explore our exclusive collection of premium properties in prime locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-green-400 text-teal-900 rounded-full flex items-center gap-2 hover:bg-green-500 transition-colors">
                Explore Properties <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
      <section className="py-20 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-400 mb-12 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-400 text-teal-900 px-3 py-1 rounded-full text-sm">
                    For Sale
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {property.location}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-400">{property.price}</span>
                    <button
                      className="text-white bg-green-400/10 px-4 py-2 rounded-full hover:bg-green-400/20 transition"
                      onClick={() => setSelectedProperty(property)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
           {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full transition">
            View More Properties
          </button>
        </div>
        </div>
      </section>

      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white max-w-lg p-6 rounded-lg relative">
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedProperty(null)}>
              <X className="h-6 w-6" />
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedProperty.title}</h2>
            <p className="text-green-400 text-lg font-semibold">{selectedProperty.price}</p>
            <p className="text-gray-300 mt-2">{selectedProperty.description}</p>
            <div className="mt-4">
              <p><strong>Bedrooms:</strong> {selectedProperty.features.bedrooms}</p>
              <p><strong>Bathrooms:</strong> {selectedProperty.features.bathrooms}</p>
              <p><strong>Area:</strong> {selectedProperty.features.area}</p>
            </div>
            <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Contact Agent
            </button>
          </div>
        </div>
      )}
    </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-teal-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
                icon: <HomeIcon className="h-8 w-8 text-green-400" />, 
                title: 'Luxury Listings', 
                description: 'Exclusive access to high-end properties.'
              },
              {
                icon: <Building className="h-8 w-8 text-green-400" />, 
                title: 'Expert Guidance', 
                description: 'Our experts guide you at every step.'
              },
              {
                icon: <Star className="h-8 w-8 text-green-400" />, 
                title: 'Trusted by Clients', 
                description: 'We have a proven track record of excellence.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                {feature.icon}
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
