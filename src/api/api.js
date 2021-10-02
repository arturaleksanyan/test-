import axios from "axios";
import { cat } from "../bll/action";

export const getCats=(page)=>{
 return (dispatch) => {
     axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=1`)
    .then((res)=>dispatch(cat(res.data)))
    .catch((e)=>console.log(e))
 }
}  


