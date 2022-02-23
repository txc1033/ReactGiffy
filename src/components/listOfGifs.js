import React, {useEffect,useState} from 'react';
import Gif from "./gif";
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {

    const {keyword} = params;
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);
        getGifs({keyword})
            .then(gifs => {
                setGifs(gifs) 
                setLoading(false)
            });   
                          }, [keyword]);
if (loading)   return <h1>Cargando...⏱🤔</h1>


  return <div> 
    {

    gifs.map(({id,title,url}) =>  
        <Gif id={id}
                key={id} 
                title={title} 
                url={url}  
        /> 
    )      
  }
</div>
     

}
