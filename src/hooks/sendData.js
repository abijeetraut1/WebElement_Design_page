import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url, _options ) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // use useRef to wrap an object/array argument
    // which is a useEffect dependeny 
    
    const options = useRef(_options).current;
    // yesma useEffect ko kai ni apply hudaina kina bhani useRef hami le trigger garako xum 
    // jaba re-evaluation huda kheri _options object ma kai changes dakhena bhani yo pheri run hudaina 

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setIsPending(true);
            try{
                const res = await fetch(url, {signal: controller.signal});

                if(!res.ok){
                    throw new Error(res.statusText);
                }                
                const json = await res.json();
                setIsPending(false);
                setData(json);
                setError(null);
            } catch(err){
                if(err.name === 'AbortError'){
                    console.log('Fetched Abort was Stopped temporary');
                } else {

                    setIsPending(false);
                    setError('couldnot fetch the data');
                }
            }
        }

        fetchData();
        
        return () => {
            controller.abort();
        }
    
    }, [url, options]);

    return { data, isPending, error }
}