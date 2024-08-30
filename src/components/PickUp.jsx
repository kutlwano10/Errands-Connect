import React, { useState } from 'react';
import axios from 'axios';

const LaundryPickup = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    
    try {
      console.log({ name, address, pickupDate, instructions });
    const response = await axios.post('http://localhost:3000/pickup', {
      name,
      address,
      pickupDate,
      instructions
    });
    console.log('Pickup request sent:', response.data);
  } catch (error) {
    console.error('Error sending pickup request:', error);
  }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">Request Laundry Pickup</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <input
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Special Instructions</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any special instructions"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Request Pickup
          </button>
        </form>
      </div>
    </div>
  );
};

export default LaundryPickup;
