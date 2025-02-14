import { axiosMovies } from "./axios";
import {API_KEY} from '../api/utils.js'


export const getMovies =async (pagina)=>{
  try {
    const res = await axiosMovies.get(`/movie/popular?&api_key=${API_KEY}&page=${pagina}`);
    return res.data.results;
  } catch (error) {
    console.log("Error al obtener las peliculas");
  }
}
// 157336
export const getInfoMovie =async(idMovie)=>{
  try {
    const res = await axiosMovies.get(`/movie/${idMovie}?&api_key=${API_KEY}`); 
    const resActors = await axiosMovies.get(`/movie/${idMovie}/credits?language=es&api_key=${API_KEY}`);
    const infoMovie ={
      ...res.data,
      actors:[...resActors.data.cast.slice(0,3)]
    }
    return infoMovie;
  } catch (error) {
    console.log("No se obtuvo la informacion");
  }
}

export const getGenres = async ()=>{
  try{
    const res = await axiosMovies.get(`/genre/movie/list?language=es&api_key=${API_KEY}`);
    return res.data.genres;
  }catch(error){
    console.log(error)
  }
}

