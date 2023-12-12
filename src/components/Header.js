import React, { useEffect, useState } from "react";
import axios from "../constants/axios";
import { imageUrl } from "../constants/constants";
import { trending } from "../constants/urls";
import '../index.css'

function Header() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    var randomNumber = Math.floor(Math.random() * 20);
    axios.get(trending).then((response) => {
      setMovie(response.data.results[randomNumber]);
    });
  }, []);

  return (
    <div>
      <div className="relative">
        <img
          src={imageUrl + movie.backdrop_path}
          alt="Background"
          className="w-full  object-cover"
          style={{ height: "550px" }}
        />
        <div className="absolute inset-0  flex flex-col  items-start max-w-lg mt-52  text-white ml-10">
          {/* Your Text or Content Goes Here */}
          <h1 className="text-4xl font-bold ml-0">
            {movie.name ? movie.name : movie.title}
          </h1>
          <div className="flex mt-2">
            {/* <button className='mr-2 p-1 bg-red-600 hover:bg-white-800 w-20  rounded-md'>play</button>  */}
            <button className="mr-2 btn bg-red-500  bg-opacity-75  text-white hover:text-black font-bold py-2 px-4 rounded-md cursor-pointer">
              Play
            </button>
            <button className="bg-red-500 hover:bg-red-500 bg-opacity-75 hover:bg-opacity-100 text-white hover:text-black font-bold py-2 px-4 rounded-md cursor-pointer">
              My list
            </button>
          </div>
          <p className="mt-2">{movie ? movie.overview : ""}</p>
        </div>
        <div className="absolute  mt-60 inset-0 bg-gradient-to-t from-black "></div>
      </div>
    </div>
  );
}

export default Header;
