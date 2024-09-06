import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-12 bg-gray-100">
      <form
        // onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">What's your phone number or email?</h1>

        {/* Input for phone number or email */}
        <input
          type="text"
        //   value={inputValue}
        //   onChange={handleInputChange}
          placeholder="Enter phone number or email"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        {/* Continue button */}
        <button
          type="submit"
          className="w-full p-3 bg-black text-white rounded mb-4"
        >
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Continue with Google */}
        <button
          type="button"
          className="w-full  border border-gray-300 rounded mb-4 flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google logo"
            className="w-12 h-12 object-contain mr-2"
          />
          Continue with Google
        </button>

        {/* Continue with Apple */}
        <button
          type="button"
          className="w-full p-3 border border-gray-300 rounded mb-4 flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Apple
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Login with QR Code */}
        <button
          type="button"
          className="w-full p-3 border border-gray-300 rounded mb-4 flex items-center justify-center"
        >
          <img
            src=""
            alt="QR code"
            className="w-5 h-5 mr-2"
          />
          Log in with QR code
        </button>

        {/* Disclaimer */}
        <p className="text-gray-400 text-sm mt-4">
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from our store to the number provided.
        </p>
      </form>
    </div>
  )
}

export default Login
