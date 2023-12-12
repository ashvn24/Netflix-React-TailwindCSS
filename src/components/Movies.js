import React,{useState,useEffect} from 'react'
import axios from '../constants/axios'
import {API_KEY, imageUrl } from "../constants/constants";
import YouTube from 'react-youtube';


function Movies(props) {

        const [list, setList] = useState([]) 
        const [movieurl, setMovieurl] = useState('')   

        useEffect(() => {
          axios.get(props.url).then(response=>{
            
            setList(response.data.results)
          }).catch(err=>{
            alert('Network error')
          })
        }, )
        const handleVideo=(id)=>{
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
                if(response.data.results.length!==0){
                    setMovieurl(response.data.results[0]);  
                }else{
                    alert("No Trailer found!")
                }
            })
        }

        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
    
  return (
    <div>
        <h3 className="mx-4 font-semibold">{props.title}</h3>
      <div className="container max-w-full my-2 overflow-x-auto no-scrollbar whitespace-no-wrap">
        <div className="flex">
        {list.map((obj,index)=>
            <div key={index} className="tranform flex-shrink-0 w-48 m-2">
            <img
                onClick={()=>handleVideo(obj.id)}
              src={imageUrl+obj.backdrop_path}
              alt={obj.title}
              className="cursor-pointer w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-md font-medium text-center">
              {obj.title?obj.title:obj.name}
            </h2>
          </div>
        )}
          
        </div>
        {movieurl && <YouTube videoId={movieurl.key} opts={opts}  />}
      </div>
    </div>
  )
}

export default Movies
