import React from "react";

function Navbar() {
  return (
    <div >
      <nav className="fixed top-0 left-0 right-0 bg-transparent p-2 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="Logo"
              className="w-20 h-15 object-cover"
            />
          </div>
          <div className=" space-x-8 hover:text-white-900">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/" className="text-white">
              TV Shows
            </a>
            <a href="/" className="text-white">
              Movies
            </a>
            <a href="/" className="text-white">
              New & Popular
            </a>
            <a href="/" className="text-white">
              My List
            </a>
          </div>
          {/* Login Button */}

          {/* User Icon */}
          <div className="flex items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Logo"
              className="mx-4 w-10 h-10 object-cover cursor-pointer"
            />
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
