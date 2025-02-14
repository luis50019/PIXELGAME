import { axiosTV } from "./axios";
import {API_KEY} from '../api/utils.js'
export const getAllSeries=async(indexPage)=>{
  try{
    const res = await axiosTV.get(`trending/tv/day?api_key=${API_KEY}&language=es&page=${indexPage}`);
    console.log(res.data.results)
    return res.data.results;
  }catch(error){
    console.log(error);
  }
}

export const getInfoSerie = async(id = 61709)=>{
  try{
    const res = await axiosTV.get(`tv/${id}?api_key=${API_KEY}&language=es-MX`);
    console.log(res.data)
    return res.data;
  }catch(error){
    console.log(error)
  }
}

export const getListGenres =async()=>{
  try{
    const res = await axiosTV.get(`/genre/tv/list?api_key=${API_KEY}&language=es-Es`);
    return res.data.genres;
  }catch(e){
    console.log(e);
  }
}
