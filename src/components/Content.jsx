
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCats } from "../api/api";
import Cats from './Cats'


function Content() {
    const [page, setPage ] = useState(1) 
    const cats = useSelector((state) => state.cat.cats)
    const dispatch= useDispatch()
    
        useEffect(()=>{
            dispatch(getCats(page)) 
        },[page])
        
    return (
      <div  >
        <div  className='content' >
          {cats.map(cat=> <Cats key={cat.id} url={cat.url}/>)}
        </div>
        
        <div>
          {!!page &&<button onClick={()=>setPage(page-1)}>{'<<<<<<'}</button>}
          <h1>{page}</h1>
          <button onClick={()=>setPage(page+1)}>{'>>>>>>'}</button>
        </div>
        
      </div>
    );
  }
  
  export default Content;
  