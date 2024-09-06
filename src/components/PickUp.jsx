import React, { useState } from 'react';
import axios from 'axios';

const Pickup = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [runner, setrunner] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    
    try {
    const response = await axios.post('http://localhost:3000/pickup', {
      runner,
      data:  { name, address, pickupDate,instructions}
    });
    console.log('Pickup request sent:', response.data);
  } catch (error) {
    console.error('Error sending pickup request:', error);
  }



  };

  return (
    <div className="min-h-screen flex items-center justify-center relative top-[64px] ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">Request For Pick Up</h1>
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
            <label className="block text-sm font-medium text-gray-600">From Location</label>
            <input
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Location"
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
            <label className="block text-sm font-medium text-gray-600">Runner</label>
            <input
              type="text"
              value={runner}
              onChange={(e) => setrunner(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="runner"
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

export default Pickup;
