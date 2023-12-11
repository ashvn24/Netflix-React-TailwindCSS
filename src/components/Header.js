import React, { useEffect, useState } from 'react'
import axios from '../constants/axios'
import {imageUrl } from "../constants/constants";
import { trending } from "../constants/urls";

function Header() {

    const [movie, setMovie] = useState('')

    useEffect(() => {
      axios.get(trending).then((response)=>{
        setMovie(response.data.results[9])
      })
    
    }, [])
    
  return (
    <div>
      <div className="relative">
        <img
          src={imageUrl+movie.backdrop_path}
          alt="Background"
          className="w-full  object-cover"
          style={{ height: "550px" }}
        />
        <div className="absolute inset-0  flex flex-col  items-start max-w-md mt-52  text-white ml-10">
          {/* Your Text or Content Goes Here */}
          <h1 className="text-4xl font-bold ml-0">{movie? movie.title:""}</h1>
          <p className="mt-2">
            {movie? movie.overview:""}
          </p>
        </div>
        <div className="absolute  mt-60 inset-0 bg-gradient-to-t from-black "></div>
      </div>
    </div>
  )
}

export default Header
