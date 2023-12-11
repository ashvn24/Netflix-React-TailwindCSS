import React from "react";

function Navbar() {
  return (
    <div className="bg-neutral-950 text-white ">
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
      <div className="relative">
        <img
          src="https://images8.alphacoders.com/111/1113035.jpg"
          alt="Background"
          className="w-full  object-cover"
          style={{ height: "550px" }}
        />
        <div className="absolute inset-0  flex flex-col  items-start max-w-md mt-52  text-white ml-10">
          {/* Your Text or Content Goes Here */}
          <h1 className="text-4xl font-bold ml-0">Your Text Goes Here</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quos consequuntur doloremque tenetur suscipit voluptatem
            consequatur, voluptatum nostrum. Explicabo aut tempora pariatur iste
            repudiandae perspiciatis accusamus tempore quaerat quis illum!
          </p>
        </div>
        <div className="absolute  mt-60 inset-0 bg-gradient-to-t from-black "></div>
      </div>

      <div className="container max-w-full my-2 overflow-x-auto no-scrollbar whitespace-no-wrap">
        <h3 className="mx-4 font-medium">Genere</h3>
        <div className="flex">
          <div className="flex-shrink-0 w-48 m-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"
              alt="{title}"
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center">
              "Description for Movie 1"
            </h2>
          </div>
          <div className="flex-shrink-0 w-48 m-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"
              alt="{title}"
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center">
              "Description for Movie 1"
            </h2>
          </div>
          <div className="flex-shrink-0 w-48 m-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"
              alt="{title}"
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center">
              "Description for Movie 1"
            </h2>
          </div>
          <div className="flex-shrink-0 w-48 m-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"
              alt="{title}"
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center">
              "Description for Movie 1"
            </h2>
          </div>
          <div className="flex-shrink-0 w-48 m-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"
              alt="{title}"
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center">
              "Description for Movie 1"
            </h2>
          </div>
          <div className="flex-shrink-0 w-48 m-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"
              alt="{title}"
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center">
              "Description for Movie 1"
            </h2>
          </div>
          <div className="flex-shrink-0 w-48 m-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"
              alt="{title}"
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center">
              "Description for Movie 1"
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
