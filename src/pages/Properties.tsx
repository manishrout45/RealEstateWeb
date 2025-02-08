import React, { useState } from "react";
import { FaBed, FaBath, FaRulerCombined, FaTimes } from "react-icons/fa";

const properties = [
  {
    id: 1,
    name: "Luxury Apartment",
    image: "https://via.placeholder.com/400",
    price: "$250,000",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    area: "1,500 sqft",
  },
  {
    id: 2,
    name: "Modern Villa",
    image: "https://via.placeholder.com/400",
    price: "$500,000",
    location: "Los Angeles, USA",
    beds: 5,
    baths: 4,
    area: "3,200 sqft",
  },
  {
    id: 3,
    name: "Cozy Cottage",
    image: "https://via.placeholder.com/400",
    price: "$180,000",
    location: "Texas, USA",
    beds: 2,
    baths: 1,
    area: "1,000 sqft",
  },
  {
    id: 4,
    name: "Penthouse Suite",
    image: "https://via.placeholder.com/400",
    price: "$750,000",
    location: "Miami, USA",
    beds: 4,
    baths: 3,
    area: "2,500 sqft",
  },
  {
    id: 5,
    name: "Beachfront House",
    image: "https://via.placeholder.com/400",
    price: "$1,200,000",
    location: "Malibu, USA",
    beds: 6,
    baths: 5,
    area: "4,000 sqft",
  },
  {
    id: 6,
    name: "Mountain Cabin",
    image: "https://via.placeholder.com/400",
    price: "$320,000",
    location: "Colorado, USA",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
  },
];

const Properties: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-teal-400">Available Properties</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative group border border-gray-700 rounded-lg shadow-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all"
          >
            <div className="relative">
              <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition"></div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-teal-300">{property.name}</h2>
              <p className="text-gray-400">{property.location}</p>
              <p className="text-xl font-bold mt-2 text-teal-400">{property.price}</p>

              {/* Property Details */}
              <div className="flex justify-between items-center mt-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <FaBed className="text-teal-400" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBath className="text-teal-400" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRulerCombined className="text-teal-400" />
                  <span>{property.area}</span>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setSelectedProperty(property)}
                className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Property Details */}
      {selectedProperty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes size={24} />
            </button>

            {/* Property Image */}
            <img
              src={selectedProperty.image}
              alt={selectedProperty.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Property Details */}
            <h2 className="text-3xl font-bold text-teal-400">{selectedProperty.name}</h2>
            <p className="text-gray-400 mt-1">{selectedProperty.location}</p>
            <p className="text-xl font-bold mt-2 text-teal-400">{selectedProperty.price}</p>

            {/* Property Features */}
            <div className="flex justify-between items-center mt-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <FaBed className="text-teal-400" />
                <span>{selectedProperty.beds} Beds</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBath className="text-teal-400" />
                <span>{selectedProperty.baths} Baths</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRulerCombined className="text-teal-400" />
                <span>{selectedProperty.area}</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
